import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  loading: false,
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    loading: false,
  }
};

const authFail = (state, action) => {
  return {
    ...state,
    loading: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: return authStart(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAILED: return authFail(state, action);
    default: return state;
  }
};
export default reducer;
