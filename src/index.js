import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { firebase } from '@firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBV0izfGMt2rouV_06sFae2XPPL21mHxbE",
  authDomain: "savetext-in.firebaseapp.com",
  projectId: "savetext-in",
  storageBucket: "savetext-in.appspot.com",
  messagingSenderId: "993332262987",
  appId: "1:993332262987:web:d3efd919aaca9a3be9f5ce",
  measurementId: "G-B1BH2YB895"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
