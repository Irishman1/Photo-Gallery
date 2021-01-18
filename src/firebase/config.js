import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8mjF5sWx48w-iWkHZf5hd_GmBqjH0JLM",
    authDomain: "photo-gallery-4ca6c.firebaseapp.com",
    projectId: "photo-gallery-4ca6c",
    storageBucket: "photo-gallery-4ca6c.appspot.com",
    messagingSenderId: "895498542535",
    appId: "1:895498542535:web:0c97abbcfa906e2c630de2"
  };
  // Initialize Firebase
 

  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };