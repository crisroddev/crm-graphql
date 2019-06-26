# crm-graphql
## GraphQL Server
```
yarn init
```
### First dependencies
```
yarn add nodemon express
```
```
yarn add babel-cli babel-preset-env babel-preset-stage-0
```
```
babel file .babelrc
```
```
yarn add express-graphql graphql
```
## First Schema
```
type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
    }

    type Query {
        cliente: Cliente
    }
```

## Type Mutation
```
    input ClienteInput {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
    }

    type Mutation {
        crearCliente(input: ClienteInput): Cliente
    }
}
```
## Using schema.graphql
```
yarn add graphql-tools graphql-import
```
## MongoDB
```
yarn add mongoose
```
```
Add model
mongoose.connect('mongodb://cris:Cra260385@ds149672.mlab.com:49672/clientes', { useNewUrlParser: true });

const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

export { Clientes };
```
## Apollo Server
```
yarn add apollo-server-express
```
## Apollo Client
```
npx create-react-app client
yarn add apollo-boost react-apollo graphql graphql-tag
```

### Apollo Client Config
```
Client --> App.js
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

    </ApolloProvider>
  );
}
```

## CRM APP
### Componentes
```
Header.js
Client.js
```
