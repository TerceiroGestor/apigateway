import * as admin from "firebase-admin";
import { google } from 'googleapis';

const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG || '');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

const googleAuth = new google.auth.OAuth2(
  process.env.client_id,
  process.env.client_secret,
  process.env.redirect_uris
);

export { auth, googleAuth };