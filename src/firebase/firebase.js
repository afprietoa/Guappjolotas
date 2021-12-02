// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-LsWwjIm5jy7hOKQh8Q51wkFZfX6dpEU",
  authDomain: "guajolotasapp.firebaseapp.com",
  projectId: "guajolotasapp",
  storageBucket: "guajolotasapp.appspot.com",
  messagingSenderId: "953043757093",
  appId: "1:953043757093:web:1273ec3bb149c7f7a837cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()

export{
    app,
    google
}