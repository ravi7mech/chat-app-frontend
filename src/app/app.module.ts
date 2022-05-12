import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpLink } from 'apollo-angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { setContext } from '@apollo/client/link/context';
import { awsmobile } from 'src/aws-exports';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
