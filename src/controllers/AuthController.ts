import { Request, Response } from "express";
import { OAuth } from "../auth/OAuth";
import fetch from "node-fetch";
import { UserService } from "../services/UserService";
import { AuthService } from "../services/AuthService";

export class AuthController {

    
    async auth(req: Request, res: Response) {

        const authUrl = OAuth.generateAuthUrl({
            access_type: 'offline',
            scope: ['email', 'profile'],
        });

        res.redirect(authUrl);
    }

    async authCallBack(req: Request, res: Response) {

        try {

            const { tokens } = await OAuth.getToken(req.query.code as string);
            const data = await AuthController.authUserInfo(tokens.access_token);
            const user = await new UserService().create(data);
            const auth = await new AuthService().create(user);
            res.status(auth ? 200 : 403).json({ auth });
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async authSignOut(req: Request, res: Response) {

        const { token } = req.body;
        const signOut = await new AuthService().delete(token);
        res.status(200).json(signOut);
    }

    static async authUserInfo(data: any){
        const result = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${data}`);
        const user = await result.json();
        return user;
    }

}