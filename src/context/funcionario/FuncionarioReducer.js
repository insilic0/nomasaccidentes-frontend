import {   
    AGREGAR_FUNCIONARIO
} from '../../types';

export default(state, action) => {
    switch(action.type){
        case AGREGAR_FUNCIONARIO:
            return{
                ...state,
                mensaje : action.payload
            }
    }
}