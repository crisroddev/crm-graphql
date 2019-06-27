import React, { Component } from 'react';

class EditarCliente extends Component {
    state = {}
    render() {

        const { id } = this.props.match.params

        console.log(id);
        
        return (
            <h1 className="text-center">Editar Cliente</h1>
        );
    }
}

export default EditarCliente;