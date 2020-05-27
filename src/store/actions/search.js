import * as actionTypes from '../actions/actionTypes';

export const updateLocation = (criteria) => {
  //the function above sends the below object as a package of "action", which is picked up in the reducer switch case
  return {
    type: actionTypes.UPDATE_LOCATION,
    location: criteria,
  };
};

export const updateBeds = (criteria) => {
  return {
    type: actionTypes.UPDATE_BEDS,
    beds: criteria,
  };
};

export const updateBaths = (criteria) => {
  return {
    type: actionTypes.UPDATE_BATHS,
    baths: criteria,
  };
};

export const updatePrice = (criteria) => {
  return {
    type: actionTypes.UPDATE_PRICE,
    price: criteria,
  };
};

//handle dispatch sent from module with mapDispatchToProps

export const newLocation = (criteria) => {
  //dispatch passes data inside of an action object that can be accessed in the reducer file with action.KEYname
  return (dispatch) => {
    dispatch(updateLocation(criteria));
  };
};

export const newBeds = (criteria) => {
  return (dispatch) => {
    dispatch(updateBeds(criteria));
  };
};

export const newBaths = (criteria) => {
  return (dispatch) => {
    dispatch(updateBaths(criteria));
  };
};

export const newPrice = (criteria) => {
  return (dispatch) => {
    dispatch(updatePrice(criteria));
  };
};
