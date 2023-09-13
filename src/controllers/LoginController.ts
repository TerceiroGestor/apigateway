import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";
import { AuthService } from "../services/AuthService";
import { Token } from "../secure/Token";

export class LoginController {

    async signIn(req: Request, res: Response, next: NextFunction) {

        try {
            const user = await new UserService().validateUser(req.body);
            const token = await new Token().generateToken(req.body, '1d');
            const auth = await new AuthService().create(user);
            Object.assign(auth, { name: user.name, email: user.email, token: token });
            res.status(200).json(auth);

        } catch (error) {
            next(error);
        }

    }

    async signOut(req: Request, res: Response, next: NextFunction) {

        try {
            const auth = await new AuthService().delete(req.body.id);
            res.status(200).json(auth);
        } catch (error) {
            next(error);
        }


    }

    async signInState(req: Request, res: Response) {


    }
}