// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk8VMgobfj0k6sSBmzypxNjNUBaqptXLQ",
  authDomain: "ai-productivity-app-f449c.firebaseapp.com",
  projectId: "ai-productivity-app-f449c",
  storageBucket: "ai-productivity-app-f449c.firebasestorage.app",
  messagingSenderId: "1086881997076",
  appId: "1:1086881997076:web:550a677b66e7d69d37e201",
  measurementId: "G-S1YHBSKK03"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
