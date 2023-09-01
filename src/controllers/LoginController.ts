import { Request, Response } from "express";
import { Admin } from "../auth/Admin";

export class LoginController {

    async signIn(req: Request, res: Response) {

        const { email } = req.body;

        Admin.getUserByEmail(email)
            .then((user) => {
                res.status(200).json(user);
            })
            .catch((error) => {
                res.status(500).json(error);
            })
    }

    async signOut(req: Request, res: Response) {

    }

    async signInState(req: Request, res: Response) {

        
    }
}