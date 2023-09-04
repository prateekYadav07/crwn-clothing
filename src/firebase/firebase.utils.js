import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCU94uDlg5G1xd9erCH4KyDYSdVwhlIDZk",
  authDomain: "crwn-db-e373b.firebaseapp.com",
  projectId: "crwn-db-e373b",
  storageBucket: "crwn-db-e373b.appspot.com",
  messagingSenderId: "843491450027",
  appId: "1:843491450027:web:721a104f810d929c03ebee",
  measurementId: "G-K594ZHWS4X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {}
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionsAndItems = async (collectionKey, itemsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  console.log(itemsToAdd);
  const batch = firestore.batch();
  itemsToAdd.forEach((item) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });

  return await batch.commit()
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error.message);
  });
