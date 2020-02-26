import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQiGFohaMA-BSal6UxLemJe33EsRkXoDE",
    authDomain: "shop-db-6a56a.firebaseapp.com",
    databaseURL: "https://shop-db-6a56a.firebaseio.com",
    projectId: "shop-db-6a56a",
    storageBucket: "shop-db-6a56a.appspot.com",
    messagingSenderId: "199102892003",
    appId: "1:199102892003:web:c2b00002e0d84c3db442d6",
    measurementId: "G-XJEJ5H34G9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 