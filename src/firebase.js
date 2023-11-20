// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz5aOPpw4UVeb1essli_vw27mCxg3RPvU",
  authDomain: "mockbuddy-95da7.firebaseapp.com",
  projectId: "mockbuddy-95da7",
  storageBucket: "mockbuddy-95da7.appspot.com",
  messagingSenderId: "351621561401",
  appId: "1:351621561401:web:5fbaec4ac29e6f7cebe1e8",
  measurementId: "G-PX6GDW1TF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);