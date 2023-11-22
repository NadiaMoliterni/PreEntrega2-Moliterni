import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" //

const firebaseConfig = {
    apiKey: "AIzaSyDF3k-l5tHNPZ37phX3Dbh3B19XNoYBT3c",
    authDomain: "proyectofinal-d3f8d.firebaseapp.com",
    projectId: "proyectofinal-d3f8d",
    storageBucket: "proyectofinal-d3f8d.appspot.com",
    messagingSenderId: "25071212345",
    appId: "1:25071212345:web:373ab59dd2298a0dc2bae8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) //