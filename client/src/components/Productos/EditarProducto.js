import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo';
import { OBTENER_PRODUCTO } from '../../queries/';

export default class EditProduct extends Component {
    render() {

        const { id } = this.props.match.params
        console.log(id)
        return (
            <Fragment>
                <h1 className="text-center">Editar Producto</h1>
                <div className="row justify-content-center">
                    <Query query={OBTENER_PRODUCTO} variables={{id}}>
                        {({ loading, error, data, refetch }) => {
                            if(loading) return "Cargando...";
                            if(error) return `Error ${error.message}`
                            
                            console.log(data);
                        }}

                    </Query>
                </div>
            </Fragment>
        )
    }
}
