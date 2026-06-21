import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6WFIY1dBs9MhXx1ZXY5wq86dOFJFvlqI",
  authDomain: "colegio-web-b6a7b.firebaseapp.com",
  projectId: "colegio-web-b6a7b",
  storageBucket: "colegio-web-b6a7b.firebasestorage.app",
  messagingSenderId: "431072069315",
  appId: "1:431072069315:web:e4047b1269055e391c8476",
  measurementId: "G-WZV480MLDS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);