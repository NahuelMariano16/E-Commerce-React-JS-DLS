// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Zl4cl-E_6gY5_w4SP7Ah1I1r4ejWUuQ",
  authDomain: "ecommercedls.firebaseapp.com",
  projectId: "ecommercedls",
  storageBucket: "ecommercedls.appspot.com",
  messagingSenderId: "488159965450",
  appId: "1:488159965450:web:c02d2240344aa712354af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)