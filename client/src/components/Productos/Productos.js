import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import {OBTENER_PRODUCTOS} from '../../queries';

export default class Products extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="text-center mb-5">Productos</h1>
                <Query query={OBTENER_PRODUCTOS} pollInterval={500}>
                {({ loading, error, data, startPolling, stopPolling}) => {
                if(loading) return "Cargando"
                if(error) return `Error: ${error.message}`
                console.log(data)
                return (
                        <table className="table">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Eliminar</th>
                                    <th scope="col">Editar</th>
                                </tr>
                            </thead>
                        </table>
                    )
                }}
                </Query>
            </Fragment>
        )
    }
}
