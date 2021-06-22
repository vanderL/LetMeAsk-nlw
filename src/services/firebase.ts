import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBHaxKXYTLik1WUeA8orUuKHI7dpoZWJBw",
    authDomain: "letmeask-1dff2.firebaseapp.com",
    databaseURL: "https://letmeask-1dff2-default-rtdb.firebaseio.com",
    projectId: "letmeask-1dff2",
    storageBucket: "letmeask-1dff2.appspot.com",
    messagingSenderId: "79968660140",
    appId: "1:79968660140:web:3ae934bf51355a1da24d09"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();