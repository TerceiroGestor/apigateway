import { NextFunction, Request, Response } from "express";
import { SendEmail } from "../notifications/SendEmail";
import { Token } from "../secure/Token";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";
import { Validator } from "../secure/Validator";
import { CustomError } from "../middleware/customError";

export class RegisterController {

    public async create(req: Request, res: Response) {

        try {

            const token = await new Token().generateToken(req.body, '1d');

            const [create, email] = [
                await new UserService().create(req.body),
                await new SendEmail().sendEmailVerified(token, req.body, 'Email Validation')
            ];

            res.status(200).json({create, email});

        } catch (error) {
            throw new CustomError(400, 'Error Created!', 'Erro ao criar usuário!', {});
        }
    }

    public async emailVerified(req: Request, res: Response) {

        const validate = await new Token().validateToken(req.query.token as string);

        if (!validate.validate) {
            return res.status(400).json(validate);
        }

        const user = await new UserService().update(validate.data);
        const auth = await new AuthService().create(user, req.query.token as string);

        res.status(validate.validate && user && auth ? 200 : 403).json({ validate, user, auth });
    }

    public async resetPassword(req: Request, res: Response) {
        const user = await new UserService().checkIfUserExists(req.body);
        if (user) {
            const email = await new SendEmail().sendEmailVerified(this.token(req.body, '15m'), req.body, 'Reset Password!');
            res.status(200).json(email);
        } else {
            res.status(403).json({ message: 'email does not exist!' });
        }
    }

    public async verifyResetPassword(req: Request, res: Response) {
        const validate = await new Token().validateToken(req.query.token as string);
        const response = await new UserService().checkToken(validate.data.email, req.query.token);
        res.status(validate && response ? 200 : 403).json(validate && response ? validate : { message: 'Error validating token!' });
    }

    public async renewPassword(req: Request, res: Response) {
        const user = await new UserService().update(req.body);

        res.status(user ? 200 : 403).json(user && user ? { message: 'Success in updating password!' } : { message: 'Error updating password!' });
    }

    private async token(data: any, time: string) {
        return await new Token().generateToken(data, time);
    }
}