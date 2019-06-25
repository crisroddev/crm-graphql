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


