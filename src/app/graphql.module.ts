import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  InMemoryCache,
  split,
  from,
  ApolloClientOptions,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { awsmobile } from 'src/aws-exports';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TYPE, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';

const url = awsmobile.aws_appsync_graphqlEndpoint;
const region = awsmobile.aws_appsync_region;
const apiKey = awsmobile.aws_appsync_apiKey;
const WebSocketUrl = awsmobile.aws_appsync_graphqlEndpointRealtime;

/* const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': apiKey,
    },
  };
}); */

export function createApollo(_httpLink: HttpLink): ApolloClientOptions<any> {
  // Http Link
  const httpLink = _httpLink.create({
    uri: awsmobile.aws_appsync_graphqlEndpoint,
  });
  // Auth Link
  const authLink = createAuthLink({
    url: awsmobile.aws_appsync_graphqlEndpoint,
    auth: {
      type: AUTH_TYPE.API_KEY,
      apiKey: awsmobile.aws_appsync_apiKey,
    },
    region: awsmobile.aws_appsync_region,
  });
  // Subscription Handshake link
  const subscriptionHandshakeLink = createSubscriptionHandshakeLink(
    {
      auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: awsmobile.aws_appsync_apiKey,
      },
      region: awsmobile.aws_appsync_region,
      url: awsmobile.aws_appsync_graphqlEndpoint,
    },
    httpLink
  );
  const link = from([
    authLink,
    split(
      (op) => {
        const { operation } = op.query.definitions[0] as any;

        if (operation === 'subscription') {
          return false;
        }

        return true;
      },
      httpLink,
      subscriptionHandshakeLink
    ),
  ]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
