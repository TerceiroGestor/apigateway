import { Request, Response } from "express";
import { auth } from "../auth/firebaseConfig";
import { createUserWithEmailAndPassword, deleteUser, sendPasswordResetEmail } from "firebase/auth";

import { LogController } from "./LogController";
import { UserController } from "./UserController";
import * as admin from "firebase-admin";
import { google } from 'googleapis';
import { googleAuth } from "../auth/firebaseAdmin";

export class RegisterController {

  /**
   * @param req 
   * @param res
   * @returns json
   * @link https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
   * @Doc https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br
   */
  async create(req: Request, res: Response) {

    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
      .then(async (userCredential) => {

        const credential = userCredential.user;
        const user = await new UserController().create(req, res, credential);

      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  async delete(req: Request, res: Response) {
    const user = auth.currentUser;
    if (user) {
      deleteUser(user)
        .then(() => {
          return true
        })
        .catch((error) => {
          res.status(404).json(error);
        });
    } else {
      res.status(404).json({ message: 'Not data' });
    }
  }

  // Finalizar
  async sendVerificationEmail(req: Request, res: Response) {
    //const auth = getAuth();
    const user = auth.currentUser;
    try {
      const data = '' // await sendEmailVerification(user);
      res.status(201).json(data);
    } catch (error) {
      res.status(201).json(error);
    }
  }

  // Finalizar
  async sendEmailResetPassword(req: Request, res: Response) {
    //const auth = getAuth();
    try {
      const data = await sendPasswordResetEmail(auth, req.body.email);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   * 
   * @param req 
   * @param res 
   * @Doc https://developers.google.com/identity/oauth2/web/guides/overview?hl=pt-br
   * @Doc https://developers.google.com/identity/gsi/web/guides/display-button?hl=pt-br#javascript
   * @Console https://console.cloud.google.com/apis/credentials?project=terceiro-gestor&hl=pt-br&supportedpurview=project
   */
  async googleAuth(req: Request, res: Response) {
    
    const authUrl = googleAuth.generateAuthUrl({
      access_type: 'offline',
      scope: ['email', 'profile'],
    });

    res.redirect(authUrl);

  }

  async googleCallback(req: Request, res: Response) {

    const { code } = req.query;

    try {

      const googleAuth = new google.auth.OAuth2(
        process.env.client_id,
        process.env.client_secret,
        process.env.redirect_uris
      );

      //const user = admin.auth.GoogleAuthProvider.credential(id_token)
      const { tokens } = await googleAuth.getToken(code as string);
      const { id_token, access_token } = tokens;
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token });
      const oauth2 = google.oauth2({ auth: oauth2Client, version: 'v2' });
      const userInfo = await oauth2.userinfo.get();

      // Aqui você pode retornar a resposta para o cliente ou fazer qualquer outra ação necessária
      res.status(201).json(userInfo);

    } catch (error) {
      console.error('Erro durante a autenticação:', error);
      res.status(500).send('Erro durante a autenticação');
    }
  }

}