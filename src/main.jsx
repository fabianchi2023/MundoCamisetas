import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkT7WIUAMqVrsifItjIQE6OA_uOdofDU4",
  authDomain: "mundocamisetas-cfcda.firebaseapp.com",
  projectId: "mundocamisetas-cfcda",
  storageBucket: "mundocamisetas-cfcda.appspot.com",
  messagingSenderId: "596769052423",
  appId: "1:596769052423:web:676f0232b5e6f415c657a2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

