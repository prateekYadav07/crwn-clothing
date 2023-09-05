import shopActionTypes from "./shop.types";

const INTITIAL_STATE = {
  collections: null,
  loading: true,
};

const shopReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case shopActionTypes.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
