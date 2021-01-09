import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB0MjSrH8mW72YBHKwPVeMzIDf4tBg9niI",
    authDomain: "dvv-computacion.firebaseapp.com",
    projectId: "dvv-computacion",
    storageBucket: "dvv-computacion.appspot.com",
    messagingSenderId: "113247677972",
    appId: "1:113247677972:web:d1df67cbba341081000101"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}