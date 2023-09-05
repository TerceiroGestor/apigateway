import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { SendEmail } from "../notifications/SendEmail";
import { Token } from "../secure/Token";
import { User } from "../entities/User";


export class RegisterController {

    constructor() {
        this.create = this.create.bind(this);
    }

    public async create(req: Request, res: Response) {

        const emailExists = await this.verifiedIfEmailExist(req.body);
        if (emailExists) return res.status(403).json({ message: "Email already exists!" });

        try {

            const token = await new Token().generateToken({ email: req.body.email, name: req.body.name }, '1h');
            const email = await new SendEmail().sendEmailVerified(token, req.body, 'Email Validation');
            const store = await new UserService().create(req.body);
            res.status(email && store ? 200 : 403).json({ email, store });

        } catch (error) {

            res.status(400).json(error);
        }

    }

    public async verifiedIfEmailExist(data: any) {
        return await new UserService().read(data.email) ? true : false;
    }

    public async emailVerified(req: Request, res: Response) {
        const validate = await new Token().validateToken(process.env.JWT_SECRET || '', req.query.token as string);
        const store = await new UserService().update(validate.data.data);
        res.status(validate.validate && store ? 200 : 403).json(validate);
    }
}