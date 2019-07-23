import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Header from './components/Layout/Header';
import Client from './components/Clientes/Client';
import EditClient from './components/Clientes/EditClient';
import NewClient from './components/Clientes/NewClient';
import NewProduct from './components/Productos/NuevoProducto';
import Products from './components/Productos/Productos';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache({
    addTypename: false
  }),
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
              <Route exact path='/' component={Client}/>
              <Route exact path='/cliente/nuevo' component={NewClient}/>
              <Route exact path='/cliente/editar/:id' component={EditClient}/>
              <Route exact path='/productos/nuevo' component={NewProduct}/>
              <Route exact path='/productos' component={Products}/>

            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
