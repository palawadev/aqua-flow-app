// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from 'firebase/auth'
// import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsPGyIqb4S0x0FvsuN6Fkzma4b73lY9ns",
  authDomain: "water-management-system-ecdcc.firebaseapp.com",
  projectId: "water-management-system-ecdcc",
  storageBucket: "water-management-system-ecdcc.appspot.com",
  messagingSenderId: "353194841921",
  appId: "1:353194841921:web:75be6ab40431653219b3c0",
  measurementId: "G-6QLV4JJ95R"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage }