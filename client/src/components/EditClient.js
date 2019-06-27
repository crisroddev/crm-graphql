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
                <h4>{id.nombre}</h4>
            </Fragment>
        );
    }
}

export default EditarCliente;