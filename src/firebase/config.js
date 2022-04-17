import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA_32BbMAAmvMcCudIsh0VheRXpJs-mVX8",
  authDomain: "ikare-rn-cross-platform.firebaseapp.com",
  databaseURL: "https://ikare-rn-cross-platform-default-rtdb.firebaseio.com",
  projectId: "ikare-rn-cross-platform",
  storageBucket: "ikare-rn-cross-platform.appspot.com",
  messagingSenderId: "332888234925",
  appId: "1:332888234925:web:2303913861cab8f29bdf24",
  measurementId: "G-4H8TCTB9HC"
};

const firebase = initializeApp(firebaseConfig);

export { firebase };