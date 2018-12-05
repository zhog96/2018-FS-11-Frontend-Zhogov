import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  }
};

export const authFailed = (err) => {
  return {
    type: actionTypes.AUTH_FAILED
  }
};

export const auth = (login, password) => {
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

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if(token) {
      dispatch(authSuccess(token));
    }
  }
};
