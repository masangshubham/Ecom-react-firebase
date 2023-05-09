// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNu8Yxeby_JJi0zQxyoX9B6_jMqaz7Sg8",
  authDomain: "ecom-react-firebase-4d074.firebaseapp.com",
  projectId: "ecom-react-firebase-4d074",
  storageBucket: "ecom-react-firebase-4d074.appspot.com",
  messagingSenderId: "781060271082",
  appId: "1:781060271082:web:e84960da50a928b144e093",
  measurementId: "G-KXM8QZTSRY",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage().ref();

export { auth, fs, storage };
