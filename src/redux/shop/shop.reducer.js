import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.types";

const INTITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
