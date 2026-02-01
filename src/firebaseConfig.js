import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0kJQxJ-JqX02MWQu6AJFuiNeJaVYn28s",
  authDomain: "hogwarts-react.firebaseapp.com",
  databaseURL: "https://hogwarts-react-default-rtdb.firebaseio.com",
  projectId: "hogwarts-react",
  storageBucket: "hogwarts-react.firebasestorage.app",
  messagingSenderId: "960426755698",
  appId: "1:960426755698:web:525b28ef454b562c3e24eb"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);