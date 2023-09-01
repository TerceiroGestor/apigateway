import * as nodemailer from 'nodemailer';

export class Email {

    public async send(email: any, body: any, subject: any) {

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

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: subject,
                text: `Por favor, clique no link a seguir para verificar seu e-mail: ${body}`
            };

            const response = await transporter.sendMail(mailOptions);

            return response.response;

        } catch (error) {
            return error;
        }
    }
}
