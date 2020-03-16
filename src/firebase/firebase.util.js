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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }
    console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating users: ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signOut1 = () => auth.signOut();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 