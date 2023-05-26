// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeIXYhxMCT4M1usq8C-tFMJDaWVZfy0zs",
    authDomain: "socail-media-olympiad.firebaseapp.com",
    projectId: "socail-media-olympiad",
    storageBucket: "socail-media-olympiad.appspot.com",
    messagingSenderId: "524317691262",
    appId: "1:524317691262:web:039ac8795d0b0d3600f72f",
    measurementId: "G-1R4DVM131B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

