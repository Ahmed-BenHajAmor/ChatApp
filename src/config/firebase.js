import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAynoxVxrzocc5xfUlUD7KAGj8tm5StDLA",
  authDomain: "chatapp-70fab.firebaseapp.com",
  projectId: "chatapp-70fab",
  storageBucket: "chatapp-70fab.appspot.com",
  messagingSenderId: "722986905282",
  appId: "1:722986905282:web:1253d108d91a1c468e555b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app);


