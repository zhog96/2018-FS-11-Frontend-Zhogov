import * as actionTypes from './actionTypes';

export const sendMessage = (message, chat_id) => {
    return {
        type: actionTypes.SEND_MESSAGE,
        payload: {
            message,
            chat_id
        }
    };
};
