// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEpqM8NPLXV1ayQl2GsMgSC7e3Ekc-PCA",
  authDomain: "cehpoint-hotel.firebaseapp.com",
  projectId: "cehpoint-hotel",
  storageBucket: "cehpoint-hotel.appspot.com",
  messagingSenderId: "241315162471",
  appId: "1:241315162471:web:0a4414a49310b8fcc8e7c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;