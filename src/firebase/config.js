import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS_7XnqvwUd5O0P_0uD_OWiJhji9EUcKs",
  authDomain: "vuechatroom-d0b7b.firebaseapp.com",
  projectId: "vuechatroom-d0b7b",
  storageBucket: "vuechatroom-d0b7b.appspot.com",
  messagingSenderId: "164587556874",
  appId: "1:164587556874:web:3c539b7718d66e8ee1cff3",
  measurementId: "G-YKKDLK1E6P"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFirestore,
    timestamp,
    projectAuth
}