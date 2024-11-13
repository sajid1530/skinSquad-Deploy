// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkLJqcrU1j-gP0URDVA04X4RrF0s67Hyk",
  authDomain: "skinsquadweb.firebaseapp.com",
  projectId: "skinsquadweb",
  storageBucket: "skinsquadweb.appspot.com",
  messagingSenderId: "789166066068",
  appId: "1:789166066068:web:b1e2282c4d746527136781",
  measurementId: "G-K5SX9B0973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);