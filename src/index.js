import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';


// var firebaseConfig = {
//   apiKey: "AIzaSyBuaezDzBSMl-GnTni1Dmxg6TCDW4VZcYc",
//   authDomain: "travelsaver-a9449.firebaseapp.com",
//   projectId: "travelsaver-a9449",
//   storageBucket: "travelsaver-a9449.appspot.com",
//   messagingSenderId: "139452715123",
//   appId: "1:139452715123:web:b9c0e62a4e1afa27fe9a06"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
