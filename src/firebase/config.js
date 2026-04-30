





import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyBE1mnuRVW1K1nNZklm0ekJTE8nkbWBAC8",

  authDomain: "sokny-9bc8c.firebaseapp.com",

  projectId: "sokny-9bc8c",

  storageBucket: "sokny-9bc8c.firebasestorage.app",

  messagingSenderId: "236655228957",

  appId: "1:236655228957:web:7fff814171ec7452702ef4",

  measurementId: "G-FTKXFTCLZL"

};






const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);