import {Clientes} from './db';
import mongoose from 'mongoose';

export const resolvers = {
    Query: {
        getCliente : ({ id }) => {
            return new Cliente(id, clientesDB[id]);
        }
    },

    Mutation: {
        crearCliente: (root, { input }) => {
            const nuevoCliente = new Clientes({
                nombre : input.nombre,
                apellido : input.apellido,
                empresa : input.empresa,
                emails : input.emails,
                edad : input.edad,
                tipo : input.tipo,
                pedidos : input.pedidos
            });
            nuevoCliente.id = nuevoCliente._id;

            return new Promise((resolve, object)=> {
                nuevoCliente.save((error) => {
                    if(error) rejects(error)
                    else resolve(nuevoCliente)
                })
            });
        },
        actualizarCliente: (root, { input }) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate({_id: input.id}, input, {new:true}, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                })
            })
        },
        eliminarCliente: (root, { id }) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndRemove({ _id: id }, (error) => {
                    if(error) rejects(error)
                    else resolve("Se elimino correctamente")
                })
            })
        }
    }
};