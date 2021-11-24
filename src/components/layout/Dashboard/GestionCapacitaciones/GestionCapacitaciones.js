import React from 'react';

const GestionCapacitaciones = () => {
    return (
        <div className="contenedor-capacitaciones">
            <h1>Capacitaciones</h1>
            <h4>Cantidad Capacitaciones incluidas: <span>2</span></h4>
            <div className="contenido-capacitacion">
                <form>
                <h2>Programar Capacitación</h2>
                <div className="capacitacion-inputs">
                    <label htmlFor="fechaVisita">Fecha Visita</label>
                    <input
                        type="date"
                    />
                </div>

                <div className="capacitacion-inputs">
                    <label htmlFor="fechaVisita">Hora Visita</label>
                    <input
                        type="time"
                    />
                </div>

                <div className="capacitacion-inputs">
                    <label htmlFor="fechaVisita">Asistentes</label>
                    <input
                        type="text"
                    />
                </div>

                <input type="submit" value="Programar" />
                </form>
                
            </div>

            <div className="listado-capacitaciones">
                <p>Capacitaciones Anteriores</p>
                <ul className="capacitaciones-list">
                    <li>Capacitacion 4</li>
                    <li>Capacitacion 5</li>
                    <li>Capacitacion 6</li>
                </ul>
            </div>
        </div>
    )
}

export default GestionCapacitaciones;
