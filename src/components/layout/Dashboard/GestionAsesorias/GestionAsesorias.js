import React, {useState, useContext} from 'react';
import AlertaContext from '../../../../context/validacion/alertaContext';
import AuthContext from '../../../../context/autenticacion/authContext';
import clienteAxios from '../../../../config/axios';
import Swal from 'sweetalert2';

const GestionAsesorias = () => {

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const {usuario} = authContext;

    const [asesoria, setAsesoria] = useState({
        motivo: '',
        cantidad_visitas:'',
        es_fiscalizacion : '',
        comentarios: ''
    });

    const {motivo, cantidad_visitas, es_fiscalizacion, comentarios} = asesoria;

    const handleChange = e =>{
        setAsesoria({
            ...asesoria,
            [e.target.name] : e.target.value
        });
    }

    const agregarAsesoria = async datos =>{
        try {
            const respuesta = clienteAxios.post('/api/asesoria', datos);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(motivo===''|| cantidad_visitas===''||es_fiscalizacion===''||comentarios===''){

            mostrarAlerta('Todos los campos son obligatorios', 'alerta alerta-error');
            return;
        }

        const {id_servicio} = usuario;
        
    
        let asesoriaFinal={
            ...asesoria,
            id_servicio
        }
        agregarAsesoria(asesoriaFinal);

        Swal.fire(
            'Enhorabuena!',
            'Asesoría ingresada correctamente',
            'success'
        );

        setAsesoria({
            motivo: '',
            cantidad_visitas:'',
            es_fiscalizacion : '',
            comentarios: ''
        });
    }

    return (
        <div className="contenedor-asesorias">
             {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null }
            <h1>Empresa: <span>Empresa 1</span></h1>
            <div className="estadisticas">
                <div>
                    <p>Cantidad Asesorias: 10</p>
                </div>

                <div>
                    <p>Cantidad Accidentes: 0</p>
                </div>
            </div>

            <div className="form-asesoria">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2>Añadir Asesoría</h2>

                    <div className="cuerpo-asesoria">
                       

                        <div className="campo-asesoria">
                            <label>Motivo Asesoría</label>
                            <textarea
                                id="motivo"
                                name="motivo"
                                value={motivo}
                                onChange={handleChange}
                            >

                            </textarea>
                        </div>
                        <div className="campo-asesoria">
                            <label>Cantidad visitas</label>
                            <input
                                type="number"
                                name="cantidad_visitas"
                                value={cantidad_visitas}
                                onChange={handleChange}

                            />
                        </div>

                        <div className="campo-asesoria">
                            <label>Comentarios</label>
                            <textarea
                                id="comentarios"
                                name="comentarios"
                                value={comentarios}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>     
                        <div className="campo-asesoria">
                        <label>Tipo Asesoría</label>
                        <select
                            name="es_fiscalizacion"
                            id="es_fiscalizacion"
                            onChange={handleChange}
                        >
                            <option value="">--Seleccione--</option>
                            <option value="A">Asesoría</option>
                            <option value="F">Fiscalización</option>
                        </select> 
                        </div>

                        <input type="submit" value="Guardar Asesoría"></input>
                    </div>
                </form>
            </div>
            
            
        </div>
    )
}

export default GestionAsesorias;
