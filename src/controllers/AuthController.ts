import { Request, Response } from "express";
import { OAuth } from "../auth/OAuth";
import fetch from "node-fetch";
import { UserService } from "../services/UserService";
import { AuthService } from "../services/AuthService";
import { authRepository } from "../repositories/authRepository";

export class AuthController {

    async Auth(req: Request, res: Response) {

        const authUrl = OAuth.generateAuthUrl({
            access_type: 'offline',
            scope: ['email', 'profile'],
        });

        res.redirect(authUrl);
    }

    async callBack(req: Request, res: Response) {

        try {

            const { tokens } = await OAuth.getToken(req.query.code as string);
            const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokens.access_token}`);
            const data = await response.json();
            const user = await new UserService().createAuth(data);
            const auth = await new AuthService().create(user, tokens.access_token);

            res.status(200).json({ user, data, auth});

        } catch (error) {
            res.status(500).json(error);
        }
    }

    async signOut(req: Request, res: Response) {

        const { token } = req.body;
        const signOut = await new AuthService().delete(token);
        res.status(200).json({ signOut });
    }

}