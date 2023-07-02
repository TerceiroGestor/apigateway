import * as nodemailer from 'nodemailer';

/**
 * @email // Configurar o email para permitir o acesso de aplicativo menos seguro ou tornar este aplicativo mais seguro
 */
export class Email {

    public async send(email: any, body: any, subject: any) {

        // Configurações de envio de e-mail usando o Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            service: process.env.EMAIL_SERVICE,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        try {

            // Configurar o e-mail a ser enviado
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: subject,
                text: `Por favor, clique no link a seguir para verificar seu e-mail: ${body}`
            };

            // Enviar o e-mail de verificação
            const response = await transporter.sendMail(mailOptions);

            return response.response;

        } catch (error) {
            return error;
        }

    }
}
