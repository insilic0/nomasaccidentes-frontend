import {   
    AGREGAR_CLIENTE,
    OBTENER_CLIENTE
} from '../../types';

export default(state, action) => {
    switch(action.type){
        case AGREGAR_CLIENTE:
            return{
                ...state,
                mensaje : action.payload
            }
        case OBTENER_CLIENTE:
            return{
                ...state,
                cliente: action.payload
                
            }
        
    }
}