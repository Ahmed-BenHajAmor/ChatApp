import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBtFJNMTsgOfMc7DAFPMqjSA2DkNhtUluk",
  authDomain: "chatapp-efd1d.firebaseapp.com",
  projectId: "chatapp-efd1d",
  storageBucket: "chatapp-efd1d.appspot.com",
  messagingSenderId: "703031818126",
  appId: "1:703031818126:web:9bf11a766d52348060d6df",
  measurementId: "G-DJZXGC1923"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app);


