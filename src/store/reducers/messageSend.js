import * as actionTypes from '../actions/actionTypes';

const initialState = {
    chats: new Array(15).fill(null).map((_, index) => {return {name:'', chat:[
        {text : `Hello ${index}`, side : "left", attachs : []}    
    ]}})
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SEND_MESSAGE:
            let local = {...state};
            local.chats[action.payload.chat_id].chat = [
                ...local.chats[action.payload.chat_id].chat,
                action.payload.message
            ];
            return local;
        default:
    }
    return state;
};

export default reducer;
