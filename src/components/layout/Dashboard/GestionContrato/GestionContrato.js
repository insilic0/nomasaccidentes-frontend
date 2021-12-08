import React, {useContext, useState, useEffect, useReducer} from 'react';
import ClienteContext from '../../../../context/cliente/clienteContext';
import FuncionarioContext from '../../../../context/funcionario/FuncionarioContext';
import AlertaContext from '../../../../context/validacion/alertaContext';
import ContratoContext from '../../../../context/contrato/contratoContext';
import Swal from 'sweetalert2';
import moment from 'moment';

const GestionContrato = () => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const clienteContext = useContext(ClienteContext);
    const {mensaje, cliente, obtenerCliente} = clienteContext;

    const contratoContext = useContext(ContratoContext);
    const { mensajeContrato, agregarContrato } = contratoContext;

    const funcionarioContext = useContext(FuncionarioContext);
    const {mensajeFuncionario, funcionario, obtenerFuncionario} = funcionarioContext;
   
    const [busquedaCliente, setBusqueda] = useState({
        run:''
    });

    const [busquedaFuncionario, setFuncionario] = useState({
        run_funcionario:''
    });

    const [monto_servicio, setMonto_servicio] = useState(0);

    const [mostrarForm, setMostrarForm] = useState(false);

    const guardarMonto = e =>{
        setMonto_servicio(parseInt(e.target.value, 10));
    }

    const [servicio, setServicio] = useState({
        motivo_servicio:'',
        fecha_fin_contrato:'',
        desc_servicio : ''
    });

    const {motivo_servicio, desc_servicio, fecha_fin_contrato} = servicio;

    
    const handleChangeServicio = e =>{
        setServicio({
            ...servicio,
            [e.target.name] : e.target.value
        });
    }

    //Destructuring del useState de cliente
    const {run} = busquedaCliente;
    const {run_funcionario} = busquedaFuncionario;


    const onChangeBusquedaRepLegal = e =>{
        setBusqueda({
            ...busquedaCliente,
            [e.target.name] : e.target.value
        });
    }

    const onChangeBusquedaFuncionario = e =>{
        setFuncionario({
            ...busquedaFuncionario,
            [e.target.name] : e.target.value
        });
    }

    let date = new Date();
    let result = date.toDateString();

    const onClickBusquedaCliente = e =>{
        e.preventDefault();

        if(run ===''){
            return;
        }
            obtenerCliente(busquedaCliente);
            setMostrarForm(true);
    }

    const onClickBusquedaFuncionario = e =>{
        e.preventDefault();

        if(run_funcionario ===''){
            return;
        }
            obtenerFuncionario(busquedaFuncionario);
            setMostrarForm(true);
    }

    const handleSubmitContrato = e =>{
        e.preventDefault();

        if(monto_servicio===0 || monto_servicio==='' || motivo_servicio===''||
         desc_servicio==='' || fecha_fin_contrato==='')
         {
            mostrarAlerta('Debe completar todos los campos', 'alerta alerta-error');
            return; 
         }
         const {id_funcionario} = funcionario;
         const {id_rep_legal} = cliente;

        let contratoCompleto={
            ...servicio,
            id_rep_legal:id_rep_legal,
            id_funcionario:id_funcionario,
            monto_servicio
        } 
        agregarContrato(contratoCompleto);
        Swal.fire(
            'Enhorabuena!',
            'Contrato ingresado correctamente',
            'success'
        );

        setMostrarForm(false);
        setBusqueda({
            run:''
        });

        setFuncionario({
            run_funcionario:''
        });

        setServicio({
            motivo_servicio:'',
            fecha_fin_contrato:'',
            desc_servicio : ''
        });

        
    }
    return (
        <form
            className="contenedor-contrato"
            onSubmit={handleSubmitContrato}
        >
            <h1>Generar Contrato</h1>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null }
            <div className="contenido-contrato">
                <div className="busqueda-cliente">
                    <h2>Buscar Cliente</h2>
                   <div>
                       
                    <input
                        type="text"
                        onChange={onChangeBusquedaRepLegal}
                        name="run"
                        value={run}
                    />
                    <button
                        type="button"
                        onClick={onClickBusquedaCliente}
                    >Consultar</button>
                   
                   </div>

                </div>
                <div className="busqueda-profesional">
                    <h2>Buscar Funcionario</h2>
                    <div>
                        
                            <input
                                type="text"
                                onChange={onChangeBusquedaFuncionario}
                                name="run_funcionario"
                                value={run_funcionario}
                            />
                            <button 
                                type="button"
                                onClick={onClickBusquedaFuncionario}
                            >Consultar</button>
                        
                   </div>
                </div>
            </div>

            <div className="datos-contrato">
                    <h1>Resumen contrato</h1>
                    {cliente && mostrarForm ? (<div className="contenedor-resumen">
                        
                        <div className="info-cliente">
                            <div className="campo-contrato">
                                    <label>Nombre Cliente </label>
                                    <input
                                        type="text"
                                        disabled
                                        value={cliente.primer_nombre}
                                    />
                            </div>
                        <div className="campo-contrato">
                            <label>Correo Cliente</label>
                            <input
                                type="text"
                                disabled
                                value={cliente.correo_electronico}
                            />
                        </div>
                    </div>

                   <div className="info-empresa">
                    <div className="campo-contrato">
                        <label>Nombre Empresa</label>
                            <input
                                type="text"
                                disabled
                                value={cliente.nombre_empresa}
                            />
                        </div>
                        <div className="campo-contrato">
                            <label>RUN Empresa</label>
                            <input
                                type="text"
                                disabled
                                value={cliente.rut_empresa}
                            />
                        </div>
                   </div>
                   
                            
                    <div className="campo-contrato">
                        <label>Fecha contrato</label>
                        <p>{result}</p>
                    </div>
                    
                    </div>) : null}

                    {funcionario && mostrarForm ? (<div className="contenedor-resumen">
                        <div className="info-cliente">
                            <div className="campo-contrato">
                                <label>RUN Funcionario </label>
                                <input
                                    type="text"
                                    disabled
                                    value={funcionario.run_funcionario_out}
                                />
                            </div>

                            <div className="campo-contrato">
                                <label>Correo Funcionario</label>
                                <input
                                    type="text"
                                    disabled
                                    value={funcionario.correo_electronico}
                                />
                            </div>
                        </div>

                        <div className="info-cliente">
                            <div className="campo-contrato">
                                <label>Primer Nombre</label>
                                <input
                                    type="text"
                                    disabled
                                    value={funcionario.primer_nombre}
                                />
                            </div>

                            <div className="campo-contrato">
                                <label>Apellido Paterno</label>
                                <input
                                    type="text"
                                    disabled
                                    value={funcionario.apellido_paterno}
                                />
                            </div>
                        </div>

                        <div className="info-cliente">
                            <div className="campo-contrato">
                                <label>Motivo Contrato</label>
                                <input
                                    type="text"
                                    name="motivo_servicio"
                                    id="motivo_servicio"
                                    value={motivo_servicio}
                                    onChange={handleChangeServicio}
                                />
                            </div>

                            <div className="campo-contrato">
                            <label>Monto Contrato</label>
                                <input
                                    type="number"
                                    name="monto_contrato"
                                    id="monto_contrato"
                                    value={monto_servicio}
                                    onChange={guardarMonto}
                                />
                            </div>
                        </div>

                        <div className="info-cliente">
                            <div className="campo-contrato">
                                <label>Descripción servicio</label>
                                <input
                                    type="text"
                                    name="desc_servicio"
                                    id="desc_servicio"
                                    value={desc_servicio}
                                    onChange={handleChangeServicio}
                                />
                            </div>

                            <div className="campo-contrato">
                            <label>Fecha fin contrato</label>
                                <input
                                    type="date"
                                    name="fecha_fin_contrato"
                                    id="fecha_fin_contrato"
                                    value={fecha_fin_contrato}
                                    onChange={handleChangeServicio}
                                />
                            </div>
                        </div>                     
                    </div>) : null}
            </div>

            {cliente && funcionario ? (<input
                type="submit"
                value="Generar"
                className="submit-contrato"
            />) : null}
            
            </form>
    )
}

export default GestionContrato;
