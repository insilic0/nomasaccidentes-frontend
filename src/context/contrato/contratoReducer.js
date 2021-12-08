import {   
    AGREGAR_CONTRATO,
} from '../../types';

export default(state, action) => {
    switch(action.type){
        case AGREGAR_CONTRATO:
            return{
                ...state,
                mensaje : action.payload
            }
    }
}