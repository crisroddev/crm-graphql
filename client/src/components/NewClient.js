import React, { Component, Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { NUEVO_CLIENTE } from '../mutations/index';

class NewClient extends Component {
    state = {
        cliente: {
            nombre: '',
            apellido: '',
            empresa: '',
            edad: '',
            email: '',
            tipo: ''
        },
        error: false,
        emails: []
    }

    nuevoCampo = () => {
        this.setState({
            emails: this.state.emails.concat([{email: ''}])
        })
    }

    render() {
        const { error } = this.state;
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">Todos los campos son obligatorios</p> : '';
        return (
            <Fragment>
                <h1 className="text-center">Nuevo Cliente</h1>

                    {respuesta}

                <div className="row justify-content-center">
                    <Mutation 
                        mutation={NUEVO_CLIENTE} 
                        onCompleted={() => this.props.history.push('/')}
                        >
                        { crearCliente => (
                            <form 
                                className="col-md-8 m-3" 
                                onSubmit={ e => {
                                    e.preventDefault();

                                    const { tipo, edad, nombre, apellido, empresa, email } = this.state.cliente;

                                    if(nombre === '' || apellido === '' || empresa === '' || edad === '' || tipo === '') {
                                        this.setState({
                                            error: true
                                        });
                                        
                                        return;
                                    }

                                    this.setState({
                                        error: false
                                    })

                                    const input = {
                                        nombre,
                                        apellido,
                                        empresa,
                                        edad: Number(edad),
                                        email,
                                        tipo
                                    };
                                    crearCliente({
                                        variables: {input}
                                    })
                                }}
                            >
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Nombre</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre"
                                            onChange={ e => {
                                                this.setState({
                                                    cliente:{
                                                        ...this.state.cliente,
                                                        nombre: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Apellido</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Apellido"
                                            onChange={ e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        apellido: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Empresa</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Empresa"
                                            onChange={ e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        empresa: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    {this.state.emails.map((input, index)=> (
                                        <div key={index} className="form-group col-md-12">
                                            <label>Correo: { index +1 }:</label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="form-control"
                                            />

                                        </div>
                                    ))}
                                    <div className="form-group d-flex justify-content-center col-md-12">
                                            <button
                                            onClick={this.nuevoCampo}
                                                type="button"
                                                className="btn btn-warning">
                                            + Agregar Email
                                            </button>

                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Edad</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Edad"
                                            onChange={ e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        edad: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Tipo Cliente</label>  
                                        <select 
                                            className="form-control"
                                            onChange={ e => {
                                                this.setState({
                                                    cliente: {
                                                        ...this.state.cliente,
                                                        tipo: e.target.value
                                                    }
                                                })
                                            }}
                                        >
                                                <option value="">Elegir...</option>
                                                <option value="PREMIUM">PREMIUM</option>
                                                <option value="BASICO">BÁSICO</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success float-right">Guardar Cambios</button>
                            </form>
                        )}

                    </Mutation>
                </div>
            </Fragment>
        );
    }
}

export default NewClient;