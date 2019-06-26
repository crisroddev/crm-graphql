import express from 'express';

import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(8000, () => console.log('Servidor en localhost:8000'));
