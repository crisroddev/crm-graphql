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

export const resolvers = {
    Query: {
        getCliente : ({ id }) => {
            return new Cliente(id, clientesDB[id]);
        }
    },

    Mutation: {
        crearCliente: ({ input }) => {
            const id = require('crypto').randomBytes(10).toString('hex');
            clientesDB[id] = input;
            return new Cliente(id, input)
        }
    }
};

export default resolvers;