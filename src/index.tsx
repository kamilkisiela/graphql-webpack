import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Posts } from './Posts';

const client = new ApolloClient({
  uri: 'https://0vw9j9w0l5.lp.gql.zone/graphql',
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById('index'));
