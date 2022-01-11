import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmWlLFK5BYzreHXVpX2ZkOUx8lCCZ7o8U",
    authDomain: "pyruby-web-home.firebaseapp.com",
    projectId: "pyruby-web-home",
    storageBucket: "pyruby-web-home.appspot.com",
    messagingSenderId: "212550814696",
    appId: "1:212550814696:web:e6d06a40a2dbaa4b34f25d",
    measurementId: "G-E19HFVJVMJ"
  };

  export const firebaseApp = initializeApp(firebaseConfig);