import { Request, Response } from "express";
import { loginRepository } from "../repositories/loginRepository";
import { auth } from "../auth/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export class LoginController {

    async signIn(req: Request, res: Response) {

        const { email, password } = req.body;

        // https://firebase.google.com/docs/reference/node/firebase.auth.Auth#signinwithemailandpassword
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                res.status(201).json(userCredential.user);
                // ...
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    }

    async signOut(req: Request, res: Response) {
        const user = auth.signOut()
        res.status(201).json(user);
    }

    async read(req: Request, res: Response) {
        try {

            const data = await loginRepository.find({
                relations: ['user']
            });
            res.status(201).json({data});

        } catch (error) {
            return res.status(500).json(error);
        }
    }
}