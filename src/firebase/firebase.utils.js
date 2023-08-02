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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((error) => {
    console.log(error.message);
  });
