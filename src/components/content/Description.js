import React from 'react'

const Description = ({aboutRef}) => {
    return (
        <div className="contenedor-desc" ref={aboutRef}>
            <h1>Descripción de la empresa</h1>
            <p>Somos una empresa dedicada a la entrega de servicios profesionales de gestión de riesgos, entregando diversos tipos de opciones que se acomodan a las necesidades del cliente. Junto con nuestro equipo experimentado, y súmamente responsable, entregamos un servicio de calidad y 100% de compromiso.</p>
        </div>
    )
}

export default Description
