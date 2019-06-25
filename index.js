import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();




const root = { hola: () => "Hola Mundo"};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Servidor en localhost:4000'));
