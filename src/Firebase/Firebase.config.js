// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPnFcYUmjOxTL-RsfWAIqHmGFVOtutPtc",
  authDomain: "travel-guru-project-b8eee.firebaseapp.com",
  projectId: "travel-guru-project-b8eee",
  storageBucket: "travel-guru-project-b8eee.appspot.com",
  messagingSenderId: "805384294779",
  appId: "1:805384294779:web:15089d8a518ece58276dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;