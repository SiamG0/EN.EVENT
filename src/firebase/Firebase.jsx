import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4PfLCqM-QtbABm2NKuNCR5N7FPjFeIK8",
  authDomain: "en-event.firebaseapp.com",
  projectId: "en-event",
  storageBucket: "en-event.appspot.com",
  messagingSenderId: "125575985554",
  appId: "1:125575985554:web:62fa365b9ffcb55089694b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;