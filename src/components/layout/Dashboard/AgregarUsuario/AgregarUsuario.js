import React, {useContext, useState, useEffect} from 'react';
import AlertaContext from '../../../../context/validacion/alertaContext';
import Swal from 'sweetalert2';
import ClienteContext from '../../../../context/cliente/clienteContext';


const AgregarUsuario = ({stateComunas}) => {

    //Context de alerta
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const clienteContext = useContext(ClienteContext);
    const {mensaje, agregarCliente} = clienteContext;

    const [usuario, setUsuario] = useState({
        runRepLegal:'',
        pNombre:'',
        sNombre:'',
        aPaterno: '',
        aMaterno:'',
        fechaNacimiento:'',
        correoElectronico:'',
        telefonoCelular:'',
        direccion:'',
        numeroDomicilio:'',
        tipoDomicilio:'',
        comuna:'',
        telefonoFijo:'',
        userName:'',
        password:''
    });

    const [empresa, setEmpresa] = useState({
        rutEmpresa:'',
        razonSocial:'',
        giroEmpresa:'',
        casaMatriz:'',
        numeroCasaMatriz:'',
        correoEmpresa:'',
        telefonoEmpresa:''
    });

    

    //Object destructuring
    const {runRepLegal, pNombre, sNombre,
    aPaterno, aMaterno, fechaNacimiento,
    correoElectronico, telefonoCelular, direccion,
    comuna, numeroDomicilio, tipoDomicilio, telefonoFijo, userName,
    password} = usuario;
    
    const {rutEmpresa,
    razonSocial,
    giroEmpresa,
    casaMatriz,
    numeroCasaMatriz,
    correoEmpresa,
    telefonoEmpresa} = empresa;

    

    const userHandleChange = e =>{
        setUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const empresaHandleChange = e =>{
        setEmpresa({
            ...empresa,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = e =>{
        e.preventDefault();

        if(runRepLegal=== '' || pNombre ==='' || sNombre===''||aPaterno ===''|| aMaterno==='' ||
        fechaNacimiento===''||correoElectronico===''||telefonoCelular===''||direccion===''||comuna===''||
        telefonoFijo===''||userName===''||password==='')
        {
            mostrarAlerta('Campos incompletos en: Representante Legal', 'alerta alerta-error');
            return;
        }

        if(rutEmpresa===''||razonSocial===''||giroEmpresa===''||casaMatriz===''||numeroCasaMatriz==='' ||
            correoEmpresa===''||telefonoEmpresa===''
        ){
            mostrarAlerta('Campos incompletos en: Empresa', 'alerta alerta-error');
            return;
        }
        if(rutEmpresa.length >= 10 || runRepLegal.length >=10){
            mostrarAlerta('El RUT o RUN no debe ser mayor a 10 caracteres', 'alerta alerta-error');
            return;
        }
        const finalUser = {...usuario, ...empresa};
        agregarCliente(finalUser);

        Swal.fire(
            'Enhorabuena!',
            'Cliente ingresado correctamente',
            'success'
        );

        setUsuario({
            runRepLegal:'',
            pNombre:'',
            sNombre:'',
            aPaterno: '',
            aMaterno:'',
            fechaNacimiento:'',
            correoElectronico:'',
            telefonoCelular:'',
            direccion:'',
            tipoDomicilio:'',
            numeroDomicilio:'',
            comuna:'',
            telefonoFijo:'',
            userName:'',
            password:''
        });

        setEmpresa({
            rutEmpresa:'',
            razonSocial:'',
            giroEmpresa:'',
            casaMatriz:'',
            numeroCasaMatriz:'',
            correoEmpresa:'',
            telefonoEmpresa:''
        });

    }

    return (
        <div className="contenedor-addUser">
           
            <div className="title-container">
            
                <h1>Agregar Usuario</h1>
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null } 
            </div>
            <div className="fields-container">
                <form
                     onSubmit={handleSubmit}
                >
                    <div className="contenedor-datos">
                        <h1>Datos Representante Legal</h1>
                            <div className="contenedor-inputs">
                                <label>RUN Representante</label>
                                <input
                                    type="text"
                                    name="runRepLegal"
                                    id="runRepLegal"
                                    value={runRepLegal}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Primer Nombre</label>
                                <input
                                    type="text"
                                    name="pNombre"
                                    id="pNombre"
                                    value={pNombre}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Segundo Nombre</label>
                                <input
                                    type="text"
                                    name="sNombre"
                                    id="sNombre"
                                    value={sNombre}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Apellido Paterno</label>
                                <input
                                    type="text"
                                    name="aPaterno"
                                    id="aPaterno"
                                    value={aPaterno}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Apellido Materno</label>
                                <input
                                    type="text"
                                    name="aMaterno"
                                    id="aMaterno"
                                    value={aMaterno}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Fecha Nacimiento</label>
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    id="fechaNacimiento"
                                    value={fechaNacimiento}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="correoElectronico"
                                    value={correoElectronico}
                                    id={fechaNacimiento}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Teléfono Celular</label>
                                <input
                                    type="text"
                                    name="telefonoCelular"
                                    id="telefonoCelular"
                                    value={telefonoCelular}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Dirección</label>
                                <input
                                    type="text"
                                    name="direccion"
                                    id="direccion"
                                    value={direccion}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Número domicilio</label>
                                <input
                                    type="text"
                                    name="numeroDomicilio"
                                    id="numeorDomicilio"
                                    value={numeroDomicilio}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Tipo domicilio</label>
                                <select name="tipoDomicilio" id="tipoDomicilio" value={tipoDomicilio} onChange={userHandleChange}>
                                    <option value=''>--Seleccione--</option>
                                    <option value='casa'>Casa</option>
                                    <option value='departamento'>Departamento</option>
                                </select>
                            </div>

                            <div className="contenedor-inputs">
                                <label>Comuna</label>
                                {/* <input
                                    type="text"
                                    name="comuna"
                                    id="comuna"
                                    value={comuna}
                                    onChange={userHandleChange}
                                /> */}
                                <select 
                                name="comuna"
                                id="comuna"
                                value={comuna}
                                onChange={userHandleChange}
                               
                            >
                                {stateComunas.map(comuna=> (
                                    <option key={comuna.ID_COMUNA} value={comuna.ID_COMUNA}>{comuna.NOMBRE_COMUNA}</option>
                                ))}
                            </select>
                            </div>
                            
                            <div className="contenedor-inputs">
                                <label>Teléfono Fijo</label>
                                <input
                                    type="text"
                                    name="telefonoFijo"
                                    id="telefonoFijo"
                                    value={telefonoFijo}
                                    onChange={userHandleChange}
                                    
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Nombre de Usuario</label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    value={userName}
                                    onChange={userHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={userHandleChange}
                                />
                            </div>
                    </div>

                    <div className="contenedor-datos contenedor-empresa">
                        <h1>Datos Empresa</h1>
                            <div className="contenedor-inputs">
                                <label>R.U.T Empresa</label>
                                <input
                                    type="text"
                                    name="rutEmpresa"
                                    id="rutEmpresa"
                                    value={rutEmpresa}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Razón Social</label>
                                <input
                                    type="text"
                                    name="razonSocial"
                                    id="razonSocial"
                                    value={razonSocial}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Giro Empresa</label>
                                <input
                                    type="text"
                                    name="giroEmpresa"
                                    id="giroEmpresa"
                                    value={giroEmpresa}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Casa Matriz</label>
                                <input
                                    type="text"
                                    name="casaMatriz"
                                    id="casaMatriz"
                                    value={casaMatriz}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Número Casa Matriz</label>
                                <input
                                    type="text"
                                    name="numeroCasaMatriz"
                                    id="numeroCasaMatriz"
                                    value={numeroCasaMatriz}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Correo Empresa</label>
                                <input
                                    type="email"
                                    name="correoEmpresa"
                                    id="correoEmpresa"
                                    value={correoEmpresa}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            <div className="contenedor-inputs">
                                <label>Teléfono Empresa</label>
                                <input
                                    type="text"
                                    name="telefonoEmpresa"
                                    id="telefonoEmpresa"
                                    value={telefonoEmpresa}
                                    onChange={empresaHandleChange}
                                />
                            </div>

                            {/* <div className="contenedor-inputs">
                                <label>Escritura Empresa</label>
                                <input
                                    type="text"
                                    name="nombre"
                                />
                            </div> */}
                    </div>
                        <div className="contenedor-submit">
                            <input type="submit" value="Agregar Cliente"></input>
                        </div>
                </form>
                
            </div>
        </div>
    )
}

export default AgregarUsuario;
