import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Header from './components/Header';
import Client from './components/Client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  onError: ({ networkError, graphqlErrors}) => {
    console.log('graphqlErrors', graphqlErrors);
    console.log('networkError', networkError);
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Client}/>>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
