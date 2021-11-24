import React from 'react';

const GestionEmpresa = () => {
    return (
        <div className="contenedor-gestion">
            <h1>Gestión Empresa</h1>
            <div className="contenedor-contenido">
                <div className="card">
                    <div className="card-title">
                        <h2>Visitas</h2>
                    </div>
                    <div className="card-text">
                        <h3>Info de Visitas</h3>
                    </div>

                    <div className="card-button">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>

                <div className="card">
                    <div className="card-title">
                        <h2>Capacitaciones</h2>
                    </div>
                    <div className="card-text">
                        <h3>Info de Capacitaciones</h3>
                    </div>

                    <div className="card-button">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>

                <div className="card">
                    <div className="card-title">
                        <h2>Asesorías</h2>
                    </div>
                    <div className="card-text">
                        <h3>Info de Asesorías</h3>
                    </div>

                    <div className="card-button">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>

            <div className="info-empresa">
                <div className="mejoras">

                </div>

                <div className="saldo-empresa">
                    <ul>
                        <li><p>Siguiente Mensualidad: <span>$400.000</span></p></li>
                        <li>Cliente al Día</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GestionEmpresa;
