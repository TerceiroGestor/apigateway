import * as nodemailer from 'nodemailer';
import { CustomError } from '../secure/CustomError';

export class Email {

    public async send(email: any, subject: any, body: any, ) {

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
                html: body
            };

            const response = await transporter.sendMail(mailOptions);
            return response.response;

        } catch (error) {
            throw new CustomError(400, { message: 'Error sending email!', error} );
        }
    }
}
