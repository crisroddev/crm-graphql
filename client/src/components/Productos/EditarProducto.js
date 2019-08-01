import React, { Component } from 'react'

export default class EditProduct extends Component {
    render() {

        const { id } = this.props.match.params
        console.log(id)
        return (
            <h1 className="text-center">
                Editar Producto
            </h1>
        )
    }
}
