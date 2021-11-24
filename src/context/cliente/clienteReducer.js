import {   
    AGREGAR_CLIENTE
} from '../../types';

export default(state, action) => {
    switch(action.type){
        case AGREGAR_CLIENTE:
            return{
                ...state,
                mensaje : action.payload
            }
    }
}