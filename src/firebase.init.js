// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF4EPEWVeWbWoFsKzVSMRJqNXb0fszSB0",
  authDomain: "assignment-09-42ab6.firebaseapp.com",
  projectId: "assignment-09-42ab6",
  storageBucket: "assignment-09-42ab6.firebasestorage.app",
  messagingSenderId: "216036338056",
  appId: "1:216036338056:web:2100cb47d7ccac8b1fb23d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);