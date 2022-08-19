import { print } from 'graphql/language/printer';
import { AWSSubscriptionClient } from './AWSSubscriptionClient';
import { WebSocketLink } from '@apollo/client/link/ws';
import { awsmobile } from 'src/aws-exports';

export const createWebsocketLink = (): WebSocketLink => {
  let customRealtimeEndpoint = awsmobile.aws_appsync_graphqlEndpoint;
  // Too many issues were found when using the aws provided realtime-subscription-handshake-link and the library
  // is poorly maintained. Because of this we are opting to use the community driven WebSocketLink and add in
  // middleware that will allow us to authenticate properly into the appsync realtime endpoint.

  // we need to generate the header and payload query string based on how aws does it
  // https://github.com/awslabs/aws-mobile-appsync-sdk-js/blob/master/packages/aws-appsync-subscription-link/src/realtime-subscription-handshake-link.ts

  const host = awsmobile.host;

  const middleware = {
    // @ts-ignore
    applyMiddleware: (options, next) => {
      if (options.query) {
        const header = generateSubscriptionHeader({ host });

        options.data = JSON.stringify({
          query:
            typeof options.query === 'string'
              ? options.query
              : print(options.query),
          variables: options.variables,
        });

        options.extensions = {
          authorization: {
            ...header,
            'x-api-key': awsmobile.aws_appsync_apiKey,
          },
        };
      }
      next();
    },
  };

  const websocketUrl: string = getAppsyncWebSocketUrl(
    host as string,
    customRealtimeEndpoint
  );

  let subscription: AWSSubscriptionClient;
  // @ts-ignore
  const connectionCallback = async (message) => {
    if (message) {
      const { errors } = message;
      if (errors && errors.length > 0) {
        const error = errors[0];

        if (error) {
          if (error.errorCode === 401) {
            if (subscription) {
              subscription.setUrl(
                getAppsyncWebSocketUrl(host as string, customRealtimeEndpoint)
              );

              // reapply middleware to operation options since it could have
              // an invalid token embedded in the options
              for (const key in Object.keys(subscription.operations)) {
                if (key) {
                  const val = subscription.operations[key];
                  if (val) {
                    val.options = await subscription.applyMiddlewares(
                      val.options
                    );
                  }
                }
              }

              // force close after a 401. this will auto-reconnect if reconnect = true
              // on the client options
              subscription.close(false, false);
            }
          }
        }
      }
    }
  };

  subscription = new AWSSubscriptionClient(websocketUrl, {
    reconnect: true,
    timeout: 5 * 60 * 1000,
    connectionCallback,
  });

  const wsLink = new WebSocketLink(subscription);

  // @ts-ignore
  wsLink.subscriptionClient.use([middleware]);

  return wsLink;
};
// @ts-ignore
const generateSubscriptionHeader = ({ host }): any => {
  return {
    host,
  };
};

const getAppsyncWebSocketUrl = (
  internalGraphqlHost: string,
  realtimeEndpoint: string
): string => {
  const headerObj: any = {
    host: internalGraphqlHost,
    'x-api-key': awsmobile.aws_appsync_apiKey,
  };

  const headerBase64 = Buffer.from(JSON.stringify(headerObj)).toString(
    'base64'
  );
  const payloadBase64 = Buffer.from('{}').toString('base64');

  const convertedRealtimeEndpoint: string =
    convertRealtimeEndpoint(realtimeEndpoint);

  const websocketUrl: string = `${convertedRealtimeEndpoint}?header=${headerBase64}&payload=${payloadBase64}`;

  return websocketUrl;
};

const convertRealtimeEndpoint = (endpoint: string): string => {
  return endpoint
    .replace('https://', 'wss://')
    .replace('appsync-api', 'appsync-realtime-api')
    .replace('gogi-beta', 'grt-beta');
};
