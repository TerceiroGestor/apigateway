import { Request, Response } from "express";
import { SendEmail } from "../notifications/SendEmail";
import { Token } from "../secure/Token";
import { AuthService } from "../services/AuthService";
import { UserService } from "../services/UserService";

export class RegisterController {

    constructor() {
        this.create = this.create.bind(this);
    }

    public async create(req: Request, res: Response) {
        
        const emailExists = await this.verifiedIfEmailExist(req.body);
        if (emailExists) return res.status(403).json({ message: "Email already exists!" });

        try {

            const token = await new Token().generateToken(req.body, '1h');
            const email = await new SendEmail().sendEmailVerified(token, req.body, 'Email Validation');
            const store = await new UserService().create(req.body);
            res.status(email && store ? 200 : 403).json({ email, store });

        } catch (error) {

            res.status(400).json(error);
        }

    }

    public async verifiedIfEmailExist(data: any) {
        let result = await new UserService().read(data);
        return result ? true : false;
    }

    public async emailVerified(req: Request, res: Response) {
        const validate = await new Token().validateToken(req.query.token as string);
        const user = await new UserService().update(validate.data.data);
        const auth = await new AuthService().create(user, req.query.token as string);
        res.status(validate.validate && user && auth ? 200 : 403).json({ validate, user, auth });
    }

    public async resetPassword(req: Request, res: Response) {
        const response = await new UserService().checkIfUserExists(req.body.email);
        if (response.user) {
            const token = await new Token().generateToken({ email: response.user.email, name: response.user.name }, '15m');
            const email = await new SendEmail().sendResetPassword(token, req.body, 'Reset Password!');
            const user = await new UserService().update({email: response.user.email, token: token });
            res.status(email && token && user ? 200 : 403).json({ email, user, token});
        }else{
            res.status(403).json({ message: 'email does not exist!' });
        }
    }

    public async verifyResetPassword(req: Request, res: Response) {
        const validate = await new Token().validateToken(req.query.token as string);
        const response = await new UserService().checkToken(validate.data.email, req.query.token);
        res.status(validate && response ? 200 : 403).json(validate && response ? validate : {message: 'Error validating token!'});
    }

    public async renewPassword(req: Request, res: Response){
        const user = await new UserService().update({
            email: req.body.email,
            password: req.body.password
        });

        res.status(user ? 200 : 403).json(user && user ? {message: 'Success in updating password!'}:{message: 'Error updating password!'});
    }
}