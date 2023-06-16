import * as admin from "firebase-admin";
import { google } from 'googleapis';

const serviceAccount = require('./terceiro-gestor-auth-firebase-adminsdk-z46l4-f9a7d8bf0b.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export const googleAuth = new google.auth.OAuth2(
    process.env.client_id,
    process.env.client_secret,
    process.env.redirect_uris
);





/* if (!admin.apps.length) {
      // Caminho para o arquivo JSON da conta de serviço
      const serviceAccount = require('../auth/terceiro-gestor-auth-firebase-adminsdk-z46l4-f9a7d8bf0b.json');
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // Configuração do seu projeto do Firebase
        // ...
      });
    }

    const googleAuth = new google.auth.OAuth2(
      process.env.client_id,
      process.env.client_secret,
      process.env.redirect_uris
    ); */