import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE_i9yI3YoaMfKz_qKVEk_VqmF_heii98",
    authDomain: "clone-b8094.firebaseapp.com",
    projectId: "clone-b8094",
    storageBucket: "clone-b8094.appspot.com",
    messagingSenderId: "354914791813",
    appId: "1:354914791813:web:1a33d492f4a76a49e194ec",
    measurementId: "G-V4NSZB6S81"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };