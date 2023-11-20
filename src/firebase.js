// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0JsMRtFEcnQPwk61vPe1vlOFw9J9R0_E",
  authDomain: "mockbuddyv.firebaseapp.com",
  projectId: "mockbuddyv",
  storageBucket: "mockbuddyv.appspot.com",
  messagingSenderId: "714079692204",
  appId: "1:714079692204:web:6b3574456947bbe35e4609",
  measurementId: "G-78EQ6W0E89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;