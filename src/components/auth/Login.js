import React,{useState, useContext, useEffect} from "react";
import AlertaContext from '../../context/validacion/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = props => {

    //Extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const {alerta , mostrarAlerta} = alertaContext;

    //Extraer valores del auth
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion} = authContext;

    useEffect(()=>{
        if(autenticado){
            props.history.push('/dashboard');
         }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    },[mensaje, autenticado, props.history]);

    //State del login
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:''
    });

    const {email, password} = usuario;

    const handleChange = e =>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();

        //Validar Campos
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta alerta-error');
            return;
        }

        iniciarSesion({email,password});
    }

    return (
        <div className="contenedor-principal">
        <div className="contenedor-form sombra-dark animate__animated animate__fadeInRight">
            <h2>Inicio de Sesión</h2>
                {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null } 

                
            <form
                 onSubmit={handleSubmit}
            >
            <div className="campo-form">
                <label htmlFor="email">Ingresa tu Correo</label>
                <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                
                >
                </input>
            </div>

            <div className="campo-form">
                <label htmlFor="password">Ingresa tu Contraseña</label>
                <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                >
                </input>
            </div>

            <div className="campo-form">
                
                <input
                type="submit"
                value="Iniciar Sesión"
                className="btn"                  
                >
                </input>
            </div>
            </form>
          
        </div>
    </div>
    )
}

export default Login
