// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvvGHJzPBr0w1_XEXGxFrRozURAOiYkYU",
    authDomain: "residential-site.firebaseapp.com",
    projectId: "residential-site",
    storageBucket: "residential-site.appspot.com",
    messagingSenderId: "888337162935",
    appId: "1:888337162935:web:7bd48b5d8d5cf3dd5e2332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;