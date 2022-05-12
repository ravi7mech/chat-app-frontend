import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { awsmobile } from 'src/aws-exports';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-api-key': awsmobile.aws_appsync_apiKey,
    },
  };
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: authLink.concat(
      httpLink.create({ uri: awsmobile.aws_appsync_graphqlEndpoint })
    ),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
