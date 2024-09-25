import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAiL2m6HPpS9jaTcalIeghdTixTYhomW2s",
    authDomain: "wedding-rsvp-d3e6a.firebaseapp.com",
    projectId: "wedding-rsvp-d3e6a",
    storageBucket: "wedding-rsvp-d3e6a.appspot.com",
    messagingSenderId: "1046572507323",
    appId: "1:1046572507323:web:1414741a1737ed4c6bc99e",
    measurementId: "G-H0JV04C4L7"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };