import React from 'react';

const GestionContrato = () => {
    return (
        <div className="contenedor-contrato">
            <h1>Generar Contrato</h1>

            <div className="contenido-contrato">
                <div className="busqueda-cliente">
                    <h2>Buscar Cliente</h2>
                </div>

                <div className="busqueda-profesional">
                    <h2>Buscar Profesional</h2>
                </div>
            </div>

            <input
                type="submit"
                value="Generar"
            />
        </div>
    )
}

export default GestionContrato
