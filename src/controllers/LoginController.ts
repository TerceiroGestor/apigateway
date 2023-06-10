import { Request, Response } from "express";

import { loginRepository } from "../repositories/loginRepository";
import { userRepository } from "../repositories/userRepository";

import { LogController } from "./LogController";

import { auth } from "../auth/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export class LoginController {

    async signIn(req: Request, res: Response) {

        const { email, password } = req.body;

        // https://firebase.google.com/docs/reference/node/firebase.auth.Auth#signinwithemailandpassword
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {

                //refatorar
                const user = await userRepository.findOneBy({firebase_uid: userCredential.user.uid });

                const login = loginRepository.create({
                    "email": userCredential.user.email?.toString(),
                    "firebase_uid": userCredential.user.uid,
                    "emailVerified": userCredential.user.emailVerified,
                    "accessToken": await userCredential.user.getIdToken(),
                    "user_id": user?.id
                });

                await loginRepository.save(login);

                new LogController().create(req, res, user, {message: 'User signIn'});
                // Signed in
                res.status(201).json(login);
                // ...
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }

    async signOut(req: Request, res: Response) {

        signOut(auth)
            .then(() => {

                // Corrigir auth não tem informações de usuário para gerar log
                new LogController().create(req, res, auth, {message: 'User signOut'});
                res.status(200).json({ message: "singOut" });
            })
            .catch((error) => {
                res.status(500).json(error);
            })
    }

    async signInState(req: Request, res: Response) {
        if (auth.currentUser) {

          const firebase = {
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            accessToken: await auth.currentUser.getIdToken()
          };

          const login = await loginRepository.findOneBy({firebase_uid: auth.currentUser.uid})
          const user = await userRepository.findOneBy({firebase_uid: auth.currentUser.uid})

          new LogController().create(req, res, user, {message: 'User signInState'});
          res.status(200).json({firebase, login, user});
        } else {
          res.status(500).json({ message: 'No authenticated user.' });
        }
    }
}