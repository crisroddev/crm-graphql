import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
        <div className="container">
            <Link to="/" lassName="navbar-brand text-light font-weight-bold">
                CMR
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item active mr-2">
                        <Link to="cliente/nuevo" className="btn btn-success">
                            Nuevo Cliente
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="productos/nuevo" className="btn btn-success">
                            Nuevo Producto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;