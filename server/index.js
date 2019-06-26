import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

const port = 8000;

app.listen({ port: port}, () => {
    console.log(`App listen on localhost:${port}${server.graphqlPath}`)
});
