import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvTFxBkfOPA3PxxCz7FQfYEgCt2YdA7E8",
    authDomain: "whatsapp-clone-34a22.firebaseapp.com",
    projectId: "whatsapp-clone-34a22",
    storageBucket: "whatsapp-clone-34a22.appspot.com",
    messagingSenderId: "208782815021",
    appId: "1:208782815021:web:2d7340d2364991d652eda4",
    measurementId: "G-525W7NHGCZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;