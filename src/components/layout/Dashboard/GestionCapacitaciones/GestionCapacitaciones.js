import React, {useState, useContext} from 'react';
import AlertaContext from '../../../../context/validacion/alertaContext';
import AuthContext from '../../../../context/autenticacion/authContext';
import clienteAxios from '../../../../config/axios';
import Swal from 'sweetalert2';
const GestionCapacitaciones = () => {

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {usuario} = authContext;

    const [capacitacion, setCapacitacion] = useState({
        fecha_capacitacion: '',
        motivo_capacitacion:'',
        asistentes:''
    });

    const {fecha_capacitacion, motivo_capacitacion, asistentes} = capacitacion;

    const handleChange = e =>{
        setCapacitacion({
            ...capacitacion,
            [e.target.name] : e.target.value
        });
    }

    const agregarCapacitacion = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/capacitacion', datos);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = e =>{

        e.preventDefault();

        if(fecha_capacitacion==='' || motivo_capacitacion===''||asistentes===''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta alerta-error');
            return;
        }

        let {id_servicio} = usuario;

        let capacitacionFinal ={
            ...capacitacion,
            id_servicio
        }

        agregarCapacitacion(capacitacionFinal);

        Swal.fire(
            'Enhorabuena!',
            'Capacitación ingresada correctamente',
            'success'
        );

        setCapacitacion({
            fecha_capacitacion: '',
            motivo_capacitacion:'',
            asistentes:''
        });
    }


    return (
        <div className="contenedor-capacitaciones">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null } 
            <h1>Capacitaciones</h1>
            <h4>Cantidad Capacitaciones incluidas: <span>2</span></h4>
            <div className="contenido-capacitacion">
                <form
                    onSubmit={handleSubmit}
                >
                <h2>Programar Capacitación</h2>
                <div className="capacitacion-inputs">
                    <label htmlFor="fechaVisita">Fecha capacitación</label>
                    <input
                        type="date"
                        id="fecha_capacitacion"
                        name="fecha_capacitacion"
                        value={fecha_capacitacion}
                        onChange={handleChange}
                    />
                </div>

                <div className="capacitacion-inputs">
                    <label htmlFor="fechaVisita">Motivo capacitación</label>
                    <textarea
                        name="motivo_capacitacion"
                        id="motivo_visita"
                        value={motivo_capacitacion}
                        onChange={handleChange}
                    >

                    </textarea>
                </div>

                <div className="capacitacion-inputs">
                    <label htmlFor="fechaVisita">Asistentes</label>
                    <input
                        type="text"
                        id="asistentes"
                        name="asistentes"
                        value={asistentes}
                        onChange={handleChange}
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
