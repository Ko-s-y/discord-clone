// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmCtNb7hDDy09AKWMHVh4Nmz0jT6w08B4",
  authDomain: "discord-clone-8940c.firebaseapp.com",
  projectId: "discord-clone-8940c",
  storageBucket: "discord-clone-8940c.appspot.com",
  messagingSenderId: "602748517170",
  appId: "1:602748517170:web:6562bcf5b4fdb40df9f52b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db }
