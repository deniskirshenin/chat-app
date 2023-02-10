// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestone } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcJOe2zbRe_1W5h5gc0hSiZS3hlpCBGns",
  authDomain: "chat-app-435b5.firebaseapp.com",
  projectId: "chat-app-435b5",
  storageBucket: "chat-app-435b5.appspot.com",
  messagingSenderId: "400128924467",
  appId: "1:400128924467:web:0a821c5473d77af41abc46",
  measurementId: "G-CJZ3NTK8TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestone(app);