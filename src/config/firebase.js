import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyDvLHNSM5pWEa85X_5gNKHCpoQtayUaWqY",
  authDomain: "tiktok---jornada-5ee9a.firebaseapp.com",
  projectId: "tiktok---jornada-5ee9a",
  storageBucket: "tiktok---jornada-5ee9a.appspot.com",
  messagingSenderId: "94411205965",
  appId: "1:94411205965:web:b2648ad8949355ddb6db04"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;