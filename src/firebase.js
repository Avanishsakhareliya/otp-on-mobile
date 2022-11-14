import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCAXvbVDgl75sIiZLdot8ywAABTvPYfyW8",
  authDomain: "newdemo-66c3c.firebaseapp.com",
  projectId: "newdemo-66c3c",
  storageBucket: "newdemo-66c3c.appspot.com",
  messagingSenderId: "927829927517",
  appId: "1:927829927517:web:7ba9b1a0543442acdd0fb4",
  measurementId: "G-J60J01XFPC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
