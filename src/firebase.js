import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBwBqWKrsQo44jyp-tvv-4CXrsmE6uU1Vg",
  authDomain: "project-arogyam.firebaseapp.com",
  databaseURL: "https://project-arogyam.firebaseio.com",
  projectId: "project-arogyam",
  storageBucket: "project-arogyam.appspot.com",
  messagingSenderId: "309132614366",
  appId: "1:309132614366:web:dbe8f327134f151d2ac04f",
  measurementId: "G-G82PVKL5TQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db =firebase.firestore()
export default firebase