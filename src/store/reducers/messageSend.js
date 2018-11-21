import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    payload: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEND_MESSAGE:
            return updateObject(state, 
                {payload: action.payload}
            );
    }
    return state;
};

export default reducer;
