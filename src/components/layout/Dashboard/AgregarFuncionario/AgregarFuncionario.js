import React, {useState, useContext} from 'react';
import AlertaContext from '../../../../context/validacion/alertaContext';
import FuncionarioContext from '../../../../context/funcionario/FuncionarioContext';
import Swal from 'sweetalert2';


const AgregarFuncionario = () => {

    //Context de alerta
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //Context de Funcionario
    const funcionarioContext = useContext(FuncionarioContext);
    const {mensaje, agregarFuncionario} = funcionarioContext;

    const [funcionario, setFuncionario] = useState({
        runFuncionario:'',
        primerNombre:'',
        segundoNombre: '',
        apellidoPaterno:'',
        apellidoMaterno:'',
        correoElectronico:'',
        cargo:'',
        userName:'',
        password:''
    });

    const {runFuncionario, primerNombre, segundoNombre,
        apellidoPaterno, apellidoMaterno, correoElectronico,
        cargo, userName, password
    } = funcionario;

    const handleChange = e =>{
        setFuncionario({
            ...funcionario,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = e =>{
        e.preventDefault();

        if(runFuncionario===''|| primerNombre===''|| segundoNombre===''||
        apellidoPaterno===''|| apellidoMaterno==='' || correoElectronico===''||
        cargo===''||userName===''||password===''
        ){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta alerta-error');
            return;
        }

        agregarFuncionario(funcionario);
        Swal.fire(
            'Enhorabuena!',
            'Funcionario ingresado correctamente',
            'success'
        );

        setFuncionario({
            runFuncionario:'',
            primerNombre:'',
            segundoNombre: '',
            apellidoPaterno:'',
            apellidoMaterno:'',
            correoElectronico:'',
            cargo:'',
            userName:'',
            password:''
        });
    }

    return (
        <div className="contenedor-funcionario">
            <div className="title-funcionario">
                <h1>Agregar Funcionario</h1>
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null }
            </div>

            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-inputs">
                    <label>RUN Funcionario</label>
                        <input
                            type="text"
                            name="runFuncionario"
                            id="runFuncionario"
                            value={runFuncionario}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Primer Nombre</label>
                        <input
                            type="text"
                            name="primerNombre"
                            id="primerNombre"
                            value={primerNombre}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Segundo Nombre</label>
                        <input
                            type="text"
                            name="segundoNombre"
                            id="segundoNombre"
                            value={segundoNombre}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Apellido Paterno</label>
                        <input
                            type="text"
                            name="apellidoPaterno"
                            id="apellidoPaterno"
                            value={apellidoPaterno}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Apellido Materno</label>
                        <input
                            type="text"
                            name="apellidoMaterno"
                            id="apellidoMaterno"
                            value={apellidoMaterno}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Correo electrónico</label>
                        <input
                            type="email"
                            name="correoElectronico"
                            id="correoElectronico"
                            value={correoElectronico}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Cargo</label>
                        <select
                            name="cargo"
                            id="cargo"
                            value={cargo}
                            onChange={handleChange}
                        >
                            <option value="0">--Seleccione--</option>
                            <option value="1">Profesional</option>
                            <option value="2">Administrador</option>
                        </select>
                </div>

                <div className="contenedor-inputs">
                    <label>Nombre de Usuario</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            value={userName}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-inputs">
                    <label>Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                        />
                </div>

                <div className="contenedor-submit">
                    <input type="submit" value="Agregar"/>
                </div>
            </form>
        </div>
    )
}

export default AgregarFuncionario
