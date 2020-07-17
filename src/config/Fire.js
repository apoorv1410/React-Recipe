import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBSmDPm18gF3tFfxgX-LDnfLNH-K6oWc1c",
  authDomain: "front-end-bf3a9.firebaseapp.com",
  databaseURL: "https://front-end-bf3a9.firebaseio.com",
  projectId: "front-end-bf3a9",
  storageBucket: "front-end-bf3a9.appspot.com",
  messagingSenderId: "328035815154",
  appId: "1:328035815154:web:76abdbc98aa85c0e7a8a6b",
  measurementId: "G-2PHNNCLWRZ"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;