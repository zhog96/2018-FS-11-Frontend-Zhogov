import * as actionTypes from '../actions/actionTypes';

const initialState = {
    chats: [],
    loading: false,
    error: false
};

const loadChatsStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const loadChatsSuccess = (state, action) => {
  return {
    ...state,
    chats: [...action.chats],
    error: false,
    loading: false
  }
};

const loadChatsFail = (state, action) => {
  return {
    ...state,
    error: true,
    loading: false
  }
};

const authSuccess = (state, action) => {
  return {
    ...state,
    error: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.CHAT_START: return loadChatsStart(state, action);
    case actionTypes.CHAT_SUCCESS: return loadChatsSuccess(state, action);
    case actionTypes.CHAT_FAILED: return loadChatsFail(state, action);
    case actionTypes.SEND_MESSAGE:
            let local = {...state};
            local.chats[action.payload.chat_id].chat = [
                ...local.chats[action.payload.chat_id].chat,
                action.payload.message
            ];
            return local;
    default: return state;
  }
};

export default reducer;
