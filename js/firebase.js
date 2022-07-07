// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlLOPoEh7PRPahYUFcC199PknKasPQmds",
  authDomain: "nextgames-778df.firebaseapp.com",
  projectId: "nextgames-778df",
  storageBucket: "nextgames-778df.appspot.com",
  messagingSenderId: "1043345677506",
  appId: "1:1043345677506:web:f3950c83d0723fb7536f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)







