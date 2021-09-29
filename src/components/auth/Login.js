import React from 'react'

const Login = () => {
    return (
        <div className="contenedor-principal">
        <div className="contenedor-form sombra-dark animate__animated animate__fadeInRight">
            <h2>Inicio de Sesión</h2>
                {/* {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) :null } */}
            <form
                // onSubmit={handleSubmit}
            >
            <div className="campo-form">
                <label htmlFor="email">Ingresa tu Correo</label>
                <input
                type="email"
                name="email"
                id="email"
                // value={email}
                // onChange={handleChange}
                
                >
                </input>
            </div>

            <div className="campo-form">
                <label htmlFor="password">Ingresa tu Contraseña</label>
                <input
                type="password"
                id="password"
                name="password"
                // value={password}
                // onChange={handleChange}
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
           
            {/* <Link to={'/register'} className="enlace-cuenta">
                No tienes cuenta? <span>Regístrate</span>
            </Link> */}
          
        </div>
    </div>
    )
}

export default Login
