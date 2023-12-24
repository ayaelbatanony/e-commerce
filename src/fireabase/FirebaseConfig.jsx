// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6h09XEIhIALmaOon3uFvuivmemKwjMnM",
  authDomain: "mydata-3eb5e.firebaseapp.com",
  projectId: "mydata-3eb5e",
  storageBucket: "mydata-3eb5e.appspot.com",
  messagingSenderId: "241522065925",
  appId: "1:241522065925:web:999734b6e68412b399926c"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}