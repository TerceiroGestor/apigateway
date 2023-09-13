import * as Auth from "firebase/auth"; // https://firebase.google.com/docs/web/setup?hl=pt-br#add-sdk-and-initialize
import { initializeApp } from "firebase/app";

const app = initializeApp(JSON.parse(process.env.FIREBASE_APP || ''));
Auth.getAuth(app);
//const Auth = Auth(app);

export { Auth };