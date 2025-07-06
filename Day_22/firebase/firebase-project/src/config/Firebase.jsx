import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCKB1Y6_Lr2El9xaJ_UD6IYvsQfbSxs48M",
  authDomain: "fir-course-43b58.firebaseapp.com",
  projectId: "fir-course-43b58",
  storageBucket: "fir-course-43b58.firebasestorage.app",
  messagingSenderId: "187504622670",
  appId: "1:187504622670:web:592485702f39b755b6571f",
  measurementId: "G-H2MZQTR6VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);