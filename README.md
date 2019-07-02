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
NewClient.js
EditClient.js
```
```
Add React Router
yarn add react-router-dom
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
```
## New Clients
```
Form add playground Mutation from folder mutations
Add onChanges for inputs
onChange={ e => {
                                        this.setState({
                                            cliente: {
                                                ...this.state.cliente,
                                                empresa: e.target.value
                                            }
                                        })
                                    }}
                                />
```
```
Mutation Wraps Form
crearCliente function sends data to database
   { crearCliente => (
                            <form 
                                className="col-md-8 m-3" 
                                onSubmit={ e => {
                                    e.preventDefault();

                                    const { nombre, apellido, empresa, edad, email, tipo } = this.state.cliente;
                                    const input = {
                                        nombre,
                                        apellido,
                                        empresa,
                                        edad: Number(edad),
                                        email,
                                        tipo
                                    };
                                    crearCliente({
                                        variables: {input}
                                    })
                                }}
                            >
```
```
Deactivate Caching
 <Query query={CLIENTES_QUERY} pollInterval={500}>
    {({ loading, error, data, startPolling, stopPolling}) => {
```
## Edit Clients
```
Match --> Params --> We get the ID
 const { id } = this.props.match.params

console.log(id);
```
```
Create Query for queries folder
export const CLIENTE_QUERY = gql`
  query buscarCliente($id: ID){
    getCliente(id: $id) {
      nombre
      apellido
      empresa
    }
  }
`;

Query Variables
{
  "id": "5d138972ad4fe1ab008858ba"
}
```

```
Front
<Query query={CLIENTE_QUERY} variables={{id}}>
```
```
Component
FormularioEditarCliente
 <FormularioEditar
    cliente={data.getCliente}
/>

<input
    defaultValue={edad}
    type="text" 
    className="form-control" 
/>
```
```
Delete typeName Cache
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
```
```
Refetch every time we call it the query its made again
 <Query query={CLIENTE_QUERY} variables={{id}} pollInterval={500} refetchQueries={ACTUALIZAR_CLIENTE}>
  {({ loading, error, data, startPolling, stopPolling, refetch }) => {

return(
 <FormularioEditar
 cliente={data.getCliente}
 id
 refetch={refetch}
/>
```

## Delete Clients
```
Mutation:
mutation eliminarCliente($id: ID!) {
  eliminarCliente(id: $id)
}

Variables
{
  "id": "5d138972ad4fe1ab008858ba"
}
```

## Pagination
### Limits and Offsets
```
Resolver:
getClientes: (root, { limite, offset }) => {
  return Clientes.find({}).limit(limite).skip(offset)
},

Schema
 type Query {
    getClientes(limite: In, offset: Int): [Cliente]
  }
```
