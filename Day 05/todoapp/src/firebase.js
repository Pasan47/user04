// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiSGDGQ4qqzeT_pO6QdCal8qciM_px6Bs",
  authDomain: "to-do-87d6d.firebaseapp.com",
  projectId: "to-do-87d6d",
  storageBucket: "to-do-87d6d.appspot.com",
  messagingSenderId: "257194912165",
  appId: "1:257194912165:web:7ec2a86fe43b2aada8a04c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, deleteDoc, doc, onSnapshot };



//
/////
// 
