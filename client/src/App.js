import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

// Components
import Header from './components/Header';

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
      <Header/>
    </ApolloProvider>
  );
}

export default App;
