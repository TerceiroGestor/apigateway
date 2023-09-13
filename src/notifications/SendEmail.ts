import { Email } from "../notifications/Email";
import handlebars from 'handlebars';
import fs from 'fs';
import { CustomError } from "../secure/CustomError";

export class SendEmail {

    async sendEmailVerificationLink(email?: any, subject?: any, body?: any) {


    }

    async sendEmailUpdatePassword(email?: any, subject?: any, body?: any) {
        const response = await new Email().send(email, subject, body);
        return response;
    }

    async sendEmailVerified(token?: any, data?: any, subject?: any) {
        data.message = process.env.EMAIL_VALIDATE + token;
        const template = handlebars.compile(fs.readFileSync(__dirname + '/EmailVerify.hbs', 'utf8'));
        const response = await new Email().send(data.email, subject, template(data));
        return { email: true, message: 'You will receive a verification email!' }
    }

    async sendResetPassword(token?: any, data?: any, subject?: any) {
        data.message = process.env.RESET_PASSWORD + token;
        const template = handlebars.compile(fs.readFileSync(__dirname + '/ResetPassword.hbs', 'utf8'));
        const response = await new Email().send(data.email, subject, template(data));
        return response ? { email: true, message: 'you will receive an email to create a new password!' } : { email: false, message: 'Error sending email!'};
    }
}