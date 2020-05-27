import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  authorized: false,
  userName: '',
};

const newState = (oldState, newStates) => {
  return {
    ...oldState,
    ...newStates,
  };
};

const loginRequest = (state, action) => {
  return newState(state, { authorized: true, userName: action.userName });
};

const logoutRequest = (state, action) => {
  return newState(state, { authorized: false, userName: '' });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return loginRequest(state, action);
    case actionTypes.LOGOUT_REQUEST:
      return logoutRequest(state, action);
    default:
      return state;
  }
};

export default reducer;
