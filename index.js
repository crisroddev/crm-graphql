import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

class Cliente {
    constructor(id, {nombre, apellido, empresa, email}) {
        this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
        this.empresa = empresa,
        this.email = email
    }
}

const clientesDB = {};



const root = { 
    cliente: () => {
        return {
            "id": 1,
            "nombre": "Cristian",
            "apellido": "Rodriguez",
            "empresa": "Mobilize",
            "emails": "cr@gmail.com"
            }
         },   
        crearCliente: ({ input }) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            clientesDB[id] = input;
            return new Cliente(id, input)

        }
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Servidor en localhost:4000'));
