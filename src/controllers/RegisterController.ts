import { Request, Response } from "express";
import { UserController } from "./UserController";
import { google } from 'googleapis';
import { auth, googleAuth } from "../auth/firebaseAdmin";
import { request } from "http";


//import { auth } from "../auth/firebaseConfig";
//import { createUserWithEmailAndPassword, deleteUser, sendPasswordResetEmail } from "firebase/auth";
//import * as admin from "firebase-admin";

export class RegisterController {

  /** OK
   * @param req 
   * @param res
   * @returns json
   * @link https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
   * @Doc https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br
   */
  async create(req: Request, res: Response) {

    auth.createUser({
      email: req.body.email,
      password: req.body.password
    })
      .then(async (userCredential) => {

        const credential = userCredential
        const user = await new UserController().create(req, res, credential);

      })
      .catch((error) => {
        console.error('Erro ao criar usuário:', error);
      });
    /* createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
      .then(async (userCredential) => {

        const credential = userCredential.user;
        const user = await new UserController().create(req, res, credential);

      })
      .catch((error) => {
        res.status(500).json(error);
      }); */
  }

  //OK
  async delete(req: Request, res: Response) {

    auth.deleteUser(req.body.firebase_uid).then((response) => {

      // Corrigir auth não tem informações de usuário para gerar log
      //new LogController().create(req, res, auth, { message: 'response signOut' });
      res.status(200).json({ code: true, message: 'successfully deleted user' });
    })
      .catch((error) => {
        res.status(500).json(error);
      })
    /* const user = auth.currentUser;
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
    } */
  }

  //Review
  async update(req: Request, res: Response) {

    auth.updateUser(req.body.firebase_uid, {
      email: 'modifiedUser@example.com',
      phoneNumber: '+11234567890',
      emailVerified: true,
      password: 'newPassword',
      displayName: 'Jane Doe',
      photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: true,
    })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully updated user', userRecord.toJSON());
      })
      .catch((error) => {
        console.log('Error updating user:', error);
      });
  }

  // Finalizar
  async sendVerificationEmail(req: Request, res: Response) {

    /* const user = auth.currentUser;
    try {
      const data = '' // await sendEmailVerification(user);
      res.status(201).json(data);
    } catch (error) {
      res.status(201).json(error);
    } */
  }

  // Finalizar
  async sendEmailResetPassword(req: Request, res: Response) {
    //const auth = getAuth();
    /* try {
      const data = await sendPasswordResetEmail(auth, req.body.email);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json(error);
    } */
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

    res.status(200).json({
      uri: authUrl
    })

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
      const { id_token, access_token, expiry_date, refresh_token } = tokens;
      const oauth2Client = new google.auth.OAuth2();
      oauth2Client.setCredentials({ access_token });
      const oauth2 = google.oauth2({ auth: oauth2Client, version: 'v2' });
      const userInfo = await oauth2.userinfo.get();

      // falta retornor os dados de autenticação para o frontend
      res.redirect('http://localhost:3000/dashboard')

    } catch (error) {
      console.error('Erro durante a autenticação:', error);
      res.status(500).send('Erro durante a autenticação');
    }
  }

  async googleLogout(req: Request, res: Response) {

  }
}