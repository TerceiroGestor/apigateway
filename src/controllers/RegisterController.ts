import { NextFunction, Request, Response } from "express";
import { SendEmail } from "../notifications/SendEmail";
import { Token } from "../secure/Token";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";
import { CustomError } from "../secure/CustomError";
import { ValidationData } from "../secure/ValidationData";

export class RegisterController {

    public async create(req: Request, res: Response, next: NextFunction) {

        try {

            const token = await new Token().generateToken(req.body, '1d');

            const [create, email] = [
                await new UserService().create(req.body),
                await new SendEmail().sendEmailVerified(token, req.body, 'Email Validation')
            ];

            res.status(200).json({ create, email });

        } catch (error) {
            next(error);
        }
    }

    public async emailVerified(req: Request, res: Response, next: NextFunction) {

        try {

            const validation = ValidationData.getInstance();
            const user = await new UserService().update(validation.userData);
            const auth = await new AuthService().create(user, req.query.token as string);
            Object.assign(auth, validation.userData);
            res.status(200).json(auth);

        } catch (error) {
            next(error);
        }
    }

    public async resetPassword(req: Request, res: Response, next: NextFunction) {

        try {

            const user = await new UserService().checkIfUserExists(req.body);
            if (user) {
                const token = await new Token().generateToken(req.body, '15m');
                const user = await new UserService().insertToken(req.body, token);
                const email = await new SendEmail().sendResetPassword(token, req.body, 'Reset Password!');
                res.status(200).json(email);
            } else {
                throw new CustomError(400, { message: 'Email does not exist!' });
            }

        } catch (error) {
            next(error);
        }

    }

    public async verifyResetPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const validation = ValidationData.getInstance();
            if (validation.userData) {
                const user = await new UserService().checkToken(validation.userData.email, req.query.token);
                if (user.email_verified) {
                    res.status(200).json(user);
                } else {
                    throw new CustomError(400, { message: 'Error when updating password!' });
                }
            }

        } catch (error) {
            next(error);
        }
    }

    public async renewPassword(req: Request, res: Response, next: NextFunction) {

        try {
            const user = await new UserService().update(req.body);

            if(user){
                res.status(200).json({ message: 'Success in updating password!' });
            }else{
                throw new CustomError(400, {message: 'Error updating password!'});
            }
        } catch (error) {
            next(error);
        }
    }

    private async token(data: any, time: string) {
        return await new Token().generateToken(data, time);
    }
}