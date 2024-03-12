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
   //Add your data from the firebase
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
