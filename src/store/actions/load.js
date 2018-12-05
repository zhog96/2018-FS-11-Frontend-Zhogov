import * as actionTypes from './actionTypes';

export const loadChatsStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const loadChatsSuccess = (chats) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    chats
  }
};

export const loadChatsFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: err,
  }
};

export const loadChats = (login, password) => {
  return dispatch => {
    dispatch(authStart());
    
    var formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);

    fetch('http://localhost:8081/auth', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response);
        if(response.status !== 200) {
            dispatch(authFailed('Auth failed'));
            return;
        }
        const reader = response.body.getReader();
        reader.read().then(function processText({ done, value }) {
            if (!done) {
                localStorage.setItem('token', new TextDecoder("utf-8").decode(value));
                dispatch(authSuccess(new TextDecoder("utf-8").decode(value)));
            }
        })
      })
      .catch(error => {
        dispatch(authFailed(error));
      })
  }
};
