import React, {useReducer} from 'react';

import contratoContext from '../contrato/contratoContext';
import contratoReducer from '../contrato/contratoReducer';

import{
    AGREGAR_CONTRATO
} from '../../types';

import clienteAxios from '../../config/axios';

const ContratoState = props =>{
    const initialState ={
        mensajeContrato: null,
        contrato: null
    }
    const [state,dispatch] = useReducer(contratoReducer, initialState);

    const agregarContrato = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/contrato', datos);
            console.log(respuesta.data);
            dispatch({
                type: AGREGAR_CONTRATO,
                payload: respuesta.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <contratoContext.Provider
            value={{
                mensajeContrato : state.mensajeContrato,
                contrato: state.contrato,
                agregarContrato
            }}
        >
            {props.children}
        </contratoContext.Provider>
    );

}
export default ContratoState;