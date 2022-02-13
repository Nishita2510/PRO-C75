import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDo57jJQm89QYdnabQH4xJrZ5ZLXPFloTU",
  authDomain: "e-ride-91fa1.firebaseapp.com",
  projectId: "e-ride-91fa1",
  storageBucket: "e-ride-91fa1.appspot.com",
  messagingSenderId: "919607045579",
  appId: "1:919607045579:web:1afee7c4dbc7283732da4e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
