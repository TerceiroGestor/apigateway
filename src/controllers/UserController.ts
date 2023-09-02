import { Request, Response } from "express";
import { Admin } from "../auth/Admin";
import { OAuth } from "../auth/OAuth";
import { SendEmail } from "../notifications/SendEmail";
import { UserService } from "../services/UserService";
import { SignupController } from "./SignupController";
import { userRepository } from "../repositories/userRepository";

export class UserController {

  async create(req: Request, res: Response) {

    const { email, password } = req.body;

    Admin.createUser({ email: email, password: password })
      .then(async (credential) => {

        const link = await Admin.generateEmailVerificationLink(credential.email || '');
        await new SendEmail().sendEmailVerificationLink(credential.email, link);
        await new UserService().createAuth(credential);

        res.status(200).json({
          code: 200,
          messagem: "Você irá receber um email de verificação!"
        });

      })
      .catch((error) => {
        res.status(500).json(error)
      });
  }

  async read(req: Request, res: Response) {

    const { email } = req.body;

    await Admin.getUserByEmail(email)
      .then((userRecord) => {
        res.status(200).json(userRecord);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  async update(req: Request, res: Response) {

    const data = req.body;
    const user = await Admin.getUserByEmail(req.body.oldEmail);

    Admin.updateUser(user.uid, data)
      .then((userRecord) => {
        res.status(200).json(userRecord);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  async delete(req: Request, res: Response) {

    const { email } = req.body;
    const user = await Admin.getUserByEmail(email);
    
    Admin.deleteUser(user.uid)
      .then(async (response) => {
        await new UserService().delete(user.uid);
        res.status(200).json({ code: true, message: 'Email excluido com sucesso!' });
      })
      .catch((error) => {
        res.status(500).json(error);
      })
  }

  async verifyEmail(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const user = await Admin.getUserByEmail(email);

      if (user.emailVerified === true) {
        res.status(200).json({ code: true, messagem: "Este email está verificado!" });
      } else {
        res.status(500).json({ code: false, messagem: "Este email não foi verificado!" });
      }

    } catch (error) {
      res.status(500).json(error);
    }
  }

  async sendEmailResetPassword(req: Request, res: Response) {

    const { email } = req.body;

    try {

      const link = await Admin.generatePasswordResetLink(email);
      const response = await new SendEmail().sendEmailUpdatePassword(email, link);
      res.status(200).json({ code: true, message: 'Você irá receber um email para alterar a senha!' });

    } catch (error) {
      res.status(500).json(error);
    }
  }

  async googleAuth(req: Request, res: Response) {

    const authUrl = OAuth.generateAuthUrl({
      access_type: 'offline',
      scope: ['email', 'profile'],
    });

    res.status(200).json({
      uri: authUrl
    })

  }

  async googleCallback(req: Request, res: Response) {

    try {

      const { tokens } = await OAuth.getToken(req.body.code);
      const { id_token, access_token, expiry_date, refresh_token } = tokens;
      res.status(200).json({ token: access_token })

    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteAllUnverifiedEmail(code : any, req: Request, res: Response) {

        const register = await new SignupController().delete(req, res)

    try {

      if (code != process.env.CODE) { res.status(500).json({ code: false, message: "Não permitido!" }); }

      const listUsersResult = await Admin.listUsers();
      var list = [];
      for (const userRecord of listUsersResult.users) {
        
        if (!userRecord.emailVerified) {

          await Admin.deleteUser(userRecord.uid);
          await new UserService().delete(userRecord.uid);
          list.push(userRecord.email);

        }

      }

      res.status(200).json(list);

    } catch (error) {
      res.status(500).json(error);
    }

  }

}