import { Email } from "../notifications/Email";

export class SendEmail {

    async sendEmailVerificationLink(email?: any, subject?: any, body?: any) {

        const response = await new Email().send(email, subject, body);
        return response;
    }

    async sendEmailUpdatePassword(email?: any, subject?: any, body?: any){
        const response = await new Email().send(email, subject, body);
        return response;
    }

}