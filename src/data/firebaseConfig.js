// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgK0Xah4kKBRIer1aApu6gOWnlB4pzFMw',
  authDomain: 'shoping-project-fe3e0.firebaseapp.com',
  projectId: 'shoping-project-fe3e0',
  storageBucket: 'shoping-project-fe3e0.firebasestorage.app',
  messagingSenderId: '752812711663',
  appId: '1:752812711663:web:f312e4a60e0d632715451a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
