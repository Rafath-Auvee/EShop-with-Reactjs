// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBlrUC0kiTBIzX2bvRVMFQ5_ei9BvFD9o",
  authDomain: "eshop-f5bd1.firebaseapp.com",
  projectId: "eshop-f5bd1",
  storageBucket: "eshop-f5bd1.appspot.com",
  messagingSenderId: "640820715635",
  appId: "1:640820715635:web:7fc41087a3dc76d3b1ca06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth