import React, {useReducer} from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';

import{
    AGREGAR_CLIENTE,
    OBTENER_CLIENTE
} from '../../types';

import clienteAxios from '../../config/axios';


const ClienteState = props =>{

    const initialState = {
        mensaje: null,
        cliente: null
    }

    const [state, dispatch] = useReducer(clienteReducer, initialState);

    const agregarCliente = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/cliente', datos);
            console.log(respuesta);
            dispatch({
                type: AGREGAR_CLIENTE,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerCliente = async run =>{
        try {
            const respuesta = await clienteAxios.post('/api/cliente/obtenerCliente',run);
            dispatch({
                type: OBTENER_CLIENTE,
                payload: respuesta.data.rep_legal
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <clienteContext.Provider
            value={{
                mensaje: state.mensaje,
                cliente: state.cliente,
                agregarCliente,
                obtenerCliente
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}

export default ClienteState;