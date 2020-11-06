import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjrHzmgJg867tzZgmOy9PN5arwyxVBDRc",
  authDomain: "crown-db-21958.firebaseapp.com",
  databaseURL: "https://crown-db-21958.firebaseio.com",
  projectId: "crown-db-21958",
  storageBucket: "crown-db-21958.appspot.com",
  messagingSenderId: "424208741084",
  appId: "1:424208741084:web:523ac20f811a7f7bc8ba19",
  measurementId: "G-GFHG79PGC8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
