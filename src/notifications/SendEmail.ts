import { Email } from "../notifications/Email";

export class SendEmail {

    async sendEmailVerificationLink(email?: any, link?: any, mensagem?: any) {

        const response = await new Email().send(email, link, 'Verficação de E-mail');
        return response;
    }

    async sendEmailUpdatePassword(email?: any, link?: any, mensagem?: any){
        const response = await new Email().send(email, link, 'Alterar Senha!');
        return response;
    }

}