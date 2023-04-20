import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

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

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;