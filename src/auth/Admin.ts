import * as Auth from "firebase-admin"; // https://firebase.google.com/docs/admin/setup?hl=pt-br

Auth.initializeApp({
  credential: Auth.credential.cert(JSON.parse(process.env.FIREBASE_CONFIG || ''))
});

const Admin = Auth.auth();

export { Admin };