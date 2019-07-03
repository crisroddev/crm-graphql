import React, { Component, Fragment } from 'react';
import { CLIENTE_QUERY } from '../../queries';
import { Query } from 'react-apollo'; 
import FormularioEditar from './FormularioEditarCliente';
import { ACTUALIZAR_CLIENTE } from '../../mutations';

class EditarCliente extends Component {
    state = {}
    render() {
        const { id } = this.props.match.params
        // console.log(id);
        return (
            <Fragment>
                <h1 className="text-center">Editar Cliente</h1>

                <div className="row justify-content-center">
                <Query query={CLIENTE_QUERY} variables={{id}} pollInterval={500} refetchQueries={ACTUALIZAR_CLIENTE}>
                    {({ loading, error, data, startPolling, stopPolling, refetch }) => {
                        if(loading) return 'Cargando'
                        if(error) return `Error: ${error.message}`
                        console.log(data)

                        return(
                            <FormularioEditar
                                cliente={data.getCliente}
                                id
                                refetch={refetch}
                            />
                        )
                    }}
                </Query>
                </div>                
            </Fragment>
        );
    }
}

export default EditarCliente;