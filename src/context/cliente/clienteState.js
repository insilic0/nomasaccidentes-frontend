import React, {useReducer} from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';

import{
    AGREGAR_CLIENTE
} from '../../types';

import clienteAxios from '../../config/axios';


const ClienteState = props =>{

    const initialState = {
        mensaje: null
    }

    const [state, dispatch] = useReducer(clienteReducer, initialState);

    const agregarCliente = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/cliente', datos);
            console.log(respuesta)
            dispatch({
                type: AGREGAR_CLIENTE,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <clienteContext.Provider
            value={{
                mensaje: state.mensaje,
                agregarCliente
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}

export default ClienteState;