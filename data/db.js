import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

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