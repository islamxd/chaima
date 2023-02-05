// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOEt_ORRJ02nPGQo0ytxXJ2UlTx3YZBoE",
  authDomain: "store-8a503.firebaseapp.com",
  projectId: "store-8a503",
  storageBucket: "store-8a503.appspot.com",
  messagingSenderId: "850461078805",
  appId: "1:850461078805:web:0921677edf4253be6fa51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db