import React, {useReducer} from 'react';

import funcionarioContext from './FuncionarioContext';
import funcionarioReducer from './FuncionarioReducer';

import{
    AGREGAR_FUNCIONARIO
} from '../../types';

import clienteAxios from '../../config/axios';


const ClienteState = props =>{

    const initialState = {
        mensaje: null
    }

    const [state, dispatch] = useReducer(funcionarioReducer, initialState);

    const agregarFuncionario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/funcionario', datos);
            console.log(respuesta)
            dispatch({
                type: AGREGAR_FUNCIONARIO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <funcionarioContext.Provider
            value={{
                mensaje: state.mensaje,
                agregarFuncionario
            }}
        >
            {props.children}
        </funcionarioContext.Provider>
    )
}

export default ClienteState;