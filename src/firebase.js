import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAze-jfnnIX4uvRrrLHw0duhIQ7p0SGzZg",
    authDomain: "mykart-4caa5.firebaseapp.com",
    projectId: "mykart-4caa5",
    storageBucket: "mykart-4caa5.appspot.com",
    messagingSenderId: "367729892841",
    appId: "1:367729892841:web:854a9675532d479331bf78",
    measurementId: "G-7MG05QJ0T7"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };