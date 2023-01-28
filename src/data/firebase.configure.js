// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "portfolio-54b61.firebaseapp.com",
  databaseURL: "https://portfolio-54b61-default-rtdb.firebaseio.com",
  projectId: "portfolio-54b61",
  storageBucket: "portfolio-54b61.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSGSID,
  appId: "1:318923451671:web:d6a5e2fdaf18aeef6e9b52",
  measurementId: "G-316SLTH2EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);