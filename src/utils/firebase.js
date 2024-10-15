// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5figX48-7fOgQRAPUGnVA21oahOpiqro",
  authDomain: "netflix-gpt-89d4b.firebaseapp.com",
  projectId: "netflix-gpt-89d4b",
  storageBucket: "netflix-gpt-89d4b.appspot.com",
  messagingSenderId: "73076718724",
  appId: "1:73076718724:web:ae229f137c8bf63b45d6d1",
  measurementId: "G-779YT0LER5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();