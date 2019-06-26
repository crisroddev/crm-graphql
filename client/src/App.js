import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'localhost:8000/graphql',
  onError: ({ networkError, graphqlErrors}) => {
    console.log('graphqlErrors', graphqlErrors);
    console.log('networkError', networkError);
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hola</h1>
    </ApolloProvider>
  );
}

export default App;
