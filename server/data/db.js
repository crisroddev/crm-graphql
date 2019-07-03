import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://cris:Cra260385@ds243717.mlab.com:43717/crm', { useNewUrlParser: true });

//Clientes
const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    emails: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});
const Clientes = mongoose.model('clientes', clientesSchema);

//Productos
const productosSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number

});
const Productos = mongoose.model('productos', productosSchema);

export { Clientes };