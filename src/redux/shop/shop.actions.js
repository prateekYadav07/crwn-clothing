// import {
//   convertCollectionSnapshotToMap,
//   firestore,
// } from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLLECTION_FAILURE,
  payload: errorMessage,
});

// export const fetchCollectionStartAsync = () => {
  // return (dispatch) => {
  //   const collectionRef = firestore.collection("collections");
  //   dispatch(fetchCollectionStart());

  //   // this is a promise based pattern (but still using firestore snapshot)
  //   collectionRef
  //     .get()
  //     .then(async (snapshot) => {
  //       const collectionMap = convertCollectionSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionSuccess(collectionMap));
  //     })
  //     .catch((error) => dispatch(fetchCollectionFailure(error.message)));

//     //actual way of dealing with apis using fetch and promise
//     // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-e373b/databases/(default)/documents/collections")
//     //     .then(res => res.json())
//     //     .then(collection => console.log(collection))

//     // this is an observable/observer pattern
//     // collectionRef.onSnapshot(async (snapshot) => {
//     //     const collectionMap = convertCollectionSnapshotToMap(snapshot)
//     //     console.log(collectionMap);
//     //     updateCollections(collectionMap)
//     //     setLoading(false)
//     // })
//   };
// };
