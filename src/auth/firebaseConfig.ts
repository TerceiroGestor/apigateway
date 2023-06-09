
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth"; // https://firebase.google.com/docs/auth/web/start?authuser=0&hl=pt

const firebaseApp = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
});

export const auth = getAuth(firebaseApp);

