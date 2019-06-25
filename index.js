import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { getMaxListeners } from 'cluster';

const app = express();




const root = { cliente: () => {
    return {
        "id": 1,
        "nombre": "Cristian",
        "apellido": "Rodriguez",
        "empresa": "Mobilize",
        "emails": [
            {email: "cr@gmail.com"},
            {email: "cr@gmail.com"}
        ]
    }
}};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Servidor en localhost:4000'));
