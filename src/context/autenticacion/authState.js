import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props =>{
    const initialState ={
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if(token){
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //Cuando el usuario inicia sesión
    const iniciarSesion = async datos =>{
        let alerta;
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            });
        //Obtener el usuario
        usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            alerta = {
                msg: error.response.data.msg,
                categoria: `alerta alerta-error`
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
        
    }

    //Cierra la sesión del usuario
    const cerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado : state.autenticado,
                usuario: state.usuario,
                mensaje : state.mensaje,
                cargando: state.cargando,
                usuarioAutenticado,
                iniciarSesion,
                cerrarSesion 
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;