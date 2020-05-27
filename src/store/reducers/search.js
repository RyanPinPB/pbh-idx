import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchRequested: false,
  searchCriteria: {
    location: 'pacific beach',
    beds: 1,
    baths: 1,
    price: 500000,
  },
};

//helper funciton to keep old state and only update new states
const newState = (oldState, newStates) => {
  return {
    ...oldState,
    ...newStates,
    searchRequested: true,
  };
};

const updateLocation = (state, action) => {
  const newCriteria = { ...state.searchCriteria };
  newCriteria.location = action.location;
  return newState(state, { searchCriteria: newCriteria });
};

const updateBeds = (state, action) => {
  const newCriteria = { ...state.searchCriteria };
  newCriteria.beds = action.beds;
  return newState(state, { searchCriteria: newCriteria });
};

const updateBaths = (state, action) => {
  const newCriteria = { ...state.searchCriteria };
  newCriteria.baths = action.baths;
  return newState(state, { searchCriteria: newCriteria });
};

const updatePrice = (state, action) => {
  const newCriteria = { ...state.searchCriteria };
  newCriteria.price = action.price;
  return newState(state, { searchCriteria: newCriteria });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOCATION:
      return updateLocation(state, action);
    case actionTypes.UPDATE_BEDS:
      return updateBeds(state, action);
    case actionTypes.UPDATE_BATHS:
      return updateBaths(state, action);
    case actionTypes.UPDATE_PRICE:
      return updatePrice(state, action);
    default:
      return state;
  }
};

export default reducer;
