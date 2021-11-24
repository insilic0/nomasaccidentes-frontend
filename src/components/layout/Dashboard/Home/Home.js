import React from 'react'

const Home = () => {
    return (
        <div className="home-container">
             <h1>Inicio</h1>
            <div className="contenido-home">
               
                <div className="visitas-home">
                    <h2>Visitas para Hoy</h2>
                    <p>Empresa: <span>Empresa 1</span></p>
                    <ul>
                        <li><p>Item 1</p><i className="fas fa-paperclip"></i></li>
                        <li><p>Item 2</p><i className="fas fa-paperclip"></i></li>
                        <li><p>Item 3</p><i className="fas fa-paperclip"></i></li>
                    </ul>
                </div>

                <div className="capacitaciones-home">
                    <h2>Proximas Capacitaciones</h2>
                    <p>Empresa: <span>Empresa 1</span></p>
                    <ul>
                        <li><p>Capacitacion 1</p></li>
                        <li><p>Capacitacion 2</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
