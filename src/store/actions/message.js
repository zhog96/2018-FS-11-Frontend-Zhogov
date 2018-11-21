import * as actionTypes from './actionTypes';

export const sendMessage = ( message ) => {
    return {
        type: actionTypes.SEND_MESSAGE,
        payload: message
    };
};
