// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ_gnY9lNjhmM-0U02suNK_GUc_L7d24U",
    authDomain: "costcrafter-e02c7.firebaseapp.com",
    projectId: "costcrafter-e02c7",
    storageBucket: "costcrafter-e02c7.appspot.com",
    messagingSenderId: "182592019441",
    appId: "1:182592019441:web:2ae35aa484428c85738250"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
// });
export const db = getFirestore(app);

// // Exporting necessary references
// export { db, auth };

export const auth = getAuth(app);

export const tripsRef = collection(db, 'trip')
export const expensesRef = collection(db, 'expenses')

export default app;