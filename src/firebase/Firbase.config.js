// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63hKJU0dRg13kqoTeJb0lzVqcZDZhRU4",
  authDomain: "portfolio-e4e15.firebaseapp.com",
  databaseURL: "https://portfolio-e4e15-default-rtdb.firebaseio.com",
  projectId: "portfolio-e4e15",
  storageBucket: "portfolio-e4e15.appspot.com",
  messagingSenderId: "600826009208",
  appId: "1:600826009208:web:179bc1bb141b8862bbbf8d",
  measurementId: "G-GZ5P588CN4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


