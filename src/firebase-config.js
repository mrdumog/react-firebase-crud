// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsyMxtyFbZ6tq3mHq0Zc_Ke-34ZmzfZCg",
  authDomain: "react-firebase-crud-29ff3.firebaseapp.com",
  projectId: "react-firebase-crud-29ff3",
  storageBucket: "react-firebase-crud-29ff3.appspot.com",
  messagingSenderId: "872298316634",
  appId: "1:872298316634:web:fe23572fb8ff016f036963",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
