import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { SendEmail } from "../notifications/SendEmail";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class RegisterController {

    constructor() {
        this.create = this.create.bind(this);
    }

    public async create(req: Request, res: Response) {

        const data = req.body
        const verify = await this.verifiedIfEmailExist(data.email);
        if (verify) return res.status(400).json({ message: "Este usuário já existe!" });

        try {

            const token = await this.generateAcessToken({email: data.email, name: data.name});
            const link = await this.generateEmailVerified(token);
            const store = await new UserService().create(data);
            const sendEmail = await new SendEmail().sendEmailVerificationLink(data.email, 'Validate', link);
            res.status(200).json({ message: 'você receberá um email de verificação' });

        } catch (error) {
            res.status(400).json(error);
        }

    }

    public async read(req: Request, res: Response) {


    }

    public async update(req: Request, res: Response) {

    }

    public async delete(req: Request, res: Response) {

    }

    public async generateAcessToken(data: any) {

        try {
            const key = process.env.JWT_SECRET || '';
            const token = jwt.sign({ data }, key, { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.error('Erro ao gerar o token JWT:', error);
            throw error;
        }
    }

    public async generateEmailVerified(token: any) {
        const link = process.env.SERVICE_REGISTER + `/register/verified?token=${token}`;
        return link;
    }

    public async emailVerified(req: Request, res: Response) {
        const key = process.env.JWT_SECRET || '';
        const token = req.query.token as string;
        const validate = jwt.verify(token, key, (error, data) => {
            if (error) return res.status(403).json({ message: 'token inválido' });
            res.status(200).json(data);
        });
    }

    public async verifiedIfEmailExist(email: any) {
        const store = await new UserService().read(email);
        if (store) {
            return true;
        } else {
            return false;
        }
    }

    

}

