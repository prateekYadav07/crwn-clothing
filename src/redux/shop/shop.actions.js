import shopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const setLoading = (loading) => ({
  type : shopActionTypes.IS_LOADING,
  payload : loading
})
