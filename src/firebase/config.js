// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBLi5ifxpAp1WqO4MxLoEuU8hTWiYSNW4",
  authDomain: "school-64a3b.firebaseapp.com",
  projectId: "school-64a3b",
  storageBucket: "school-64a3b.appspot.com",
  messagingSenderId: "19984324629",
  appId: "1:19984324629:web:40ffe449fd35ac43ad161c"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
