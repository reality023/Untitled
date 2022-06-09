// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiotWN2ZRAxKhw5jdhfq-_UZxBLwY02lc',
  authDomain: 'untitled-747dd.firebaseapp.com',
  projectId: 'untitled-747dd',
  storageBucket: 'untitled-747dd.appspot.com',
  messagingSenderId: '857493348607',
  appId: '1:857493348607:web:4f9ee00dd7c9b0da232cca',
  measurementId: 'G-RCKFZMQ5ET',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
export { db, auth, storage };
