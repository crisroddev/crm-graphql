import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTES_QUERY } from '../queries/index';

const Contactos = () => (
    <Query query={CLIENTES_QUERY}>
    {({ loading, error, data}) => {
        if(loading) return "Cargando"
        if(error) return `Error: ${error.message}`
    }}

    </Query>
)

export default Contactos;