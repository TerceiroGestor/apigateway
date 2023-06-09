import { Request, Response } from "express";
import { auth } from "../auth/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { LogController } from "./LogController";
import { userRepository } from "../repositories/userRepository";
import { loginRepository } from "../repositories/loginRepository";

import jwt from 'jsonwebtoken';

export class RegisterController {

  async create(req: Request, res: Response) {


    const { name, email, password } = req.body;

    // Ao realizar o cadastro o firebase já realiza login automático.
    //https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const credential = userCredential.user;
        const user = userRepository.create({
          "name": name,
          "email": email,
          "password": password,
          "firebase_uid": credential.uid
        });
        await userRepository.save(user);

        const payload = { 
          "id": user.id,
          "name": user.name,
          "email": user.email
        }

        const token = jwt.sign(payload, 'secretKey', {expiresIn: '1h'});

        const login = loginRepository.create({
          "user_id": user.id,
          "email": user.email,
          "firebase_uid": user.firebase_uid,
          "emailVerified": credential.emailVerified,
          "accessToken": token
          //expirationTime
        });
        
        await loginRepository.save(login);

        res.status(201).json({credential, user, login});
      })
      .catch((error) => {
        res.status(500).json(error);
      });

  }

  async read(req: Request, res: Response) {
    res.status(200).json({ message: "GET register" });
  }

  async update(req: Request, res: Response) {

  }

  async delete(req: Request, res: Response) {

  }
}