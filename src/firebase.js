import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBgfpPfHysSug2EmXJGJ4VD2kER-DdPM3o",
    authDomain: "clone-14085.firebaseapp.com",
    databaseURL: "https://clone-14085.firebaseio.com",
    projectId: "clone-14085",
    storageBucket: "clone-14085.appspot.com",
    messagingSenderId: "875399621287",
    appId: "1:875399621287:web:615e46c45b95dd97d4c982"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };