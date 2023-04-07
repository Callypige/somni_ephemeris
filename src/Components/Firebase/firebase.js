// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafHD_LgGgdHIIYKJ7U_T5pNMZrH3yzsU",
  authDomain: "somniephemeris.firebaseapp.com",
  databaseURL: "https://somniephemeris-default-rtdb.firebaseio.com",
  projectId: "somniephemeris",
  storageBucket: "somniephemeris.appspot.com",
  messagingSenderId: "413599248016",
  appId: "1:413599248016:web:a13c29f16cdf03ab0ab215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);