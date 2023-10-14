import shopActionTypes from "./shop.types";

const INTITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_COLLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage : action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
