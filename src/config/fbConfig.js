import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBtS9rx9RjjOtU4uADBoeYbRksQoMjOOpY",
  authDomain: "test-crud-e407d.firebaseapp.com",
  projectId: "test-crud-e407d",
  storageBucket: "test-crud-e407d.appspot.com",
  messagingSenderId: "722568255744",
  appId: "1:722568255744:web:9f56e1519812aec8e67be5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
