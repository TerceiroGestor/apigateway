import { Request, Response } from "express";
import { auth } from "../auth/firebaseConfig";
import { createUserWithEmailAndPassword, deleteUser, getAuth, sendPasswordResetEmail } from "firebase/auth";

import { LogController } from "./LogController";
import { UserController } from "./UserController";

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
    const auth = getAuth();
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
    const auth = getAuth();
    try {
      const data = await sendPasswordResetEmail(auth, req.body.email);
      res.status(201).json(data);
    } catch (error) {
      res.status(201).json(error);
    }
  }
}