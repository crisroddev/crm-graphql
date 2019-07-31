import React from 'react';

const Exito = ({mensaje}) => {
    return (
        <p className="alert alert-success py-4 text-center my-3">
            {mensaje}
        </p>
    );
}

export default Exito;