// Import the functions you need from the SDKs you need
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ68QzLnD2tagZk8B9W-hLxo3bQhyP10U",
    authDomain: "tinkoff-29162.firebaseapp.com",
    projectId: "tinkoff-29162",
    storageBucket: "tinkoff-29162.appspot.com",
    messagingSenderId: "507354769085",
    appId: "1:507354769085:web:c2e786780c47fe650079d4",
    measurementId: "G-QK7HV4C8WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return signOut(auth)
}

export const db = getFirestore()
