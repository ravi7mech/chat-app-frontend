import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { awsmobile } from 'src/aws-exports';

const endpoint = awsmobile.aws_appsync_graphqlEndpoint;

export const appsyncClient: any = new AWSAppSyncClient({
  disableOffline: true,
  url: endpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: awsmobile.aws_appsync_apiKey,
  },
});
