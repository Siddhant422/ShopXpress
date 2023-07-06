import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDXFHo6qTaxh9S7NVGueJtSdqq4ApFgVrM",
  authDomain: "shopxpress-backend.firebaseapp.com",
  projectId: "shopxpress-backend",
  storageBucket: "shopxpress-backend.appspot.com",
  messagingSenderId: "841661067412",
  appId: "1:841661067412:web:43a1987f1d6240000e8481",
  measurementId: "G-PVFEYRTHX9"
};

const Fire = initializeApp({...firebaseConfig});
const auth = getAuth(Fire);
const db = getFirestore(Fire);

export { auth, db, Fire }