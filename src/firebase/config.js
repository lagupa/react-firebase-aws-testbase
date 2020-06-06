import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/functions";

// Learn more on how to set up firebase
// https://firebase.google.com/docs/web/setup#using-module-bundlers

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDz-ds5cWWujh36ln-NYjdD0rj5dRjx5fQ",
  authDomain: "code-refs.firebaseapp.com",
  databaseURL: "https://code-refs.firebaseio.com",
  projectId: "code-refs",
  storageBucket: "code-refs.appspot.com",
  messagingSenderId: "165957006452",
  appId: "1:165957006452:web:0437e3664145c01e1ecd21",
  measurementId: "G-2EXW8KYNSP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var functions = firebase.functions();

export { functions };

export default firebase;
