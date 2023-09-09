import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collection) => {
    return collection ? Object.values(collection) : [];
  }
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collection) =>
    collection ? collection[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)