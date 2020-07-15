import firebase from "firebase";
import axios from "axios";

const config = {
  apiKey: "AIzaSyA1eU2m11vTeedCwP1akTFyM3bdYp5fTUg",
  authDomain: "thriftgallery-ab5c9.firebaseapp.com",
  databaseURL: "https://thriftgallery-ab5c9.firebaseio.com",
  projectId: "thriftgallery-ab5c9",
  storageBucket: "thriftgallery-ab5c9.appspot.com",
  messagingSenderId: "409534904306",
  appId: "1:409534904306:web:8ac0daeaf5946dd1879d6b"
};

firebase.initializeApp(config);
export default firebase;
