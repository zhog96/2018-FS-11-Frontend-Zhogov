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

export const loadChatsStart = () => {
  return {
    type: actionTypes.CHAT_START
  }
};

export const loadChatsSuccess = (chats) => {
  return {
    type: actionTypes.CHAT_SUCCESS,
    chats
  }
};

export const loadChatsFailed = (err) => {
  return {
    type: actionTypes.CHAT_FAILED,
    error: err,
  }
};

export const loadChats = (token) => {
  return dispatch => {
    dispatch(loadChatsStart());

    if(token !== 'qwe') {
        dispatch(loadChatsFailed('LoadFailed'));
    }

    let arr = new Array(15).fill(null).map((_, index) => {return {name:'qwe' + index, chat:[
        {text : `Hello ${index}`, side : "left", attachs : []}    
    ]}}) 

    var formData = new FormData();
    formData.append('token', token);

    fetch('http://localhost:8081/loadChats', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response);
        if(response.status !== 200) {
            dispatch(loadChatsFailed('Load Failed'));
            return;
        }
        dispatch(loadChatsSuccess(arr));
      })
      .catch(error => {
        dispatch(loadChatsFailed(error));
      })   
  }
};
