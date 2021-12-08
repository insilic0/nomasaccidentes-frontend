import React, {useReducer} from 'react';

import funcionarioContext from './FuncionarioContext';
import funcionarioReducer from './FuncionarioReducer';

import{
    AGREGAR_FUNCIONARIO,
    OBTENER_FUNCIONARIO
} from '../../types';

import clienteAxios from '../../config/axios';


const ClienteState = props =>{

    const initialState = {
        mensajeFuncionario: null,
        funcionario: null
    }

    const [state, dispatch] = useReducer(funcionarioReducer, initialState);

    const agregarFuncionario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/funcionario', datos);
            dispatch({
                type: AGREGAR_FUNCIONARIO,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerFuncionario = async run_funcionario =>{
        try {
            const respuesta = await clienteAxios.post('/api/funcionario/obtenerFuncionario', run_funcionario);

            dispatch({
                type: OBTENER_FUNCIONARIO,
                payload: respuesta.data.funcionario
            })
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <funcionarioContext.Provider
            value={{
                mensaje: state.mensaje,
                funcionario: state.funcionario,
                agregarFuncionario,
                obtenerFuncionario
            }}
        >
            {props.children}
        </funcionarioContext.Provider>
    )
}

export default ClienteState;