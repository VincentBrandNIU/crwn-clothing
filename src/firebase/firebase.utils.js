import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyALyeABT2hXyUUlYhtLRucKcW3Lxqxrz38",
  authDomain: "crwn-db-ff935.firebaseapp.com",
  databaseURL: "https://crwn-db-ff935.firebaseio.com",
  projectId: "crwn-db-ff935",
  storageBucket: "crwn-db-ff935.appspot.com",
  messagingSenderId: "215690136603",
  appId: "1:215690136603:web:23625ac5611353139afcbe",
  measurementId: "G-NYJ55F4S2S",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //SnapShot
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
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//google authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//googleauthentication utility
const provider = new firebase.auth.GoogleAuthProvider();
//Trigger google pop up when ever used for authentication and sign in
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
