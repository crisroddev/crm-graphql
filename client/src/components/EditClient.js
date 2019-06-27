import React, { Component, Fragment } from 'react';
import { CLIENTE_QUERY } from '../queries';
import { Query } from 'react-apollo'; 

class EditarCliente extends Component {
    state = {}
    render() {
        const { id } = this.props.match.params
        // console.log(id);
        return (
            <Fragment>
                <h1 className="text-center">Editar Cliente</h1>
                
                <Query query={CLIENTE_QUERY} variables={{id}} pollInterval={500}>
                    {({ loading, error, data, startPolling, stopPolling }) => {
                        if(loading) return 'Cargando'
                        if(error) return `Error: ${error.message}`
                        console.log(data)

                        return(
                            <h4>{data.getCliente.nombre} {data.getCliente.apellido}</h4>
                        )
                    }}

                </Query>
            </Fragment>
        );
    }
}

export default EditarCliente;