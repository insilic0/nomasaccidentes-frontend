import {   
    AGREGAR_FUNCIONARIO,
    OBTENER_FUNCIONARIO
} from '../../types';

export default(state, action) => {
    switch(action.type){
        case AGREGAR_FUNCIONARIO:
            return{
                ...state,
                mensaje : action.payload
            }
            case OBTENER_FUNCIONARIO:
                return{
                    ...state,
                    funcionario: action.payload
                    
                }
    }
}