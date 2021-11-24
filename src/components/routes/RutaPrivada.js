import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) =>{
    
    const authConext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authConext;

    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    }, []);

    return(
        <Route
            {...props} render={props=>!autenticado && !cargando? (
                <Redirect to="/" />

            ) : (
                <Component {...props} />
            ) }
        >

        </Route>
    );
}

export default RutaPrivada;