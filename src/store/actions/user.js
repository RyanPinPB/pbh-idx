import * as actionTypes from '../actions/actionTypes';

//handle the dispatch returned below with a function

export const initializeLogin = (name) => {
  //the function above sends the below object as a package of "action", which is picked up in the reducer switch case
  return {
    type: actionTypes.LOGIN_REQUEST,
    userName: name,
  };
};

export const initializeLogout = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST,
  };
};

//handle dispatch sent from module with mapDispatchToProps

export const loginRequest = (name) => {
  //dispatch passes data inside of an action object that can be accessed in the reducer file with action.KEYname
  return (dispatch) => {
    dispatch(initializeLogin(name));
  };
};

export const logoutRequest = () => {
  return (dispatch) => {
    dispatch(initializeLogout());
  };
};
