import { Email } from "../notifications/Email";
import handlebars from 'handlebars';
import fs from 'fs';
import path from "path";

export class SendEmail {

    async sendEmailVerificationLink(email?: any, subject?: any, body?: any) {


    }

    async sendEmailUpdatePassword(email?: any, subject?: any, body?: any) {
        const response = await new Email().send(email, subject, body);
        return response;
    }

    async sendEmailVerified(token?: any, data?: any, subject?: any) {
        data.message = process.env.EMAIL_VALIDATE + token;
        const template = handlebars.compile(fs.readFileSync(__dirname + '/template.hbs', 'utf8'));
        const response = await new Email().send(data.email, subject, template(data));
        return response ? { email: true, message: 'Você receberá um email de verificação!' } : { email: false, message: 'Erro ao enviar email!'};
    }
}