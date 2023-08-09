import { Request, Response } from "express";
import { Admin } from "../auth/Admin";
import { OAuth } from "../auth/OAuth";
import { Email } from "../notifications/Email";
import { verify } from "crypto";

export class SignupController {

  /** 
   * @param req 
   * @param res
   * @returns json
   * @link https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
   * @Doc https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br
   */
  async create(req: Request, res: Response) {

    const { email, password } = req.body;
    
    Admin.createUser({
      email: email,
      password: password
    })
      .then(async (userCredential) => {

        //https://support.google.com/firebase/answer/7000714
        const credential = userCredential;
        const link = await Admin.generateEmailVerificationLink(credential.email || '');
        const email = await new Email().send(credential.email, link, 'Verficação de E-mail');

        res.status(200).json({
          code: 200,
          email: email,
          messagem: "Você irá receber um email de verificação!",
          link: link
        });

      })
      .catch((error) => {
        res.status(500).json(error)
      });
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

  async delete(req: Request, res: Response) {

    const { email } = req.body;
    const user = await Admin.getUserByEmail(email);

    Admin.deleteUser(user.uid)
      .then((response) => {
        res.status(200).json({ code: true, message: 'Email excluido com sucesso!' });
      })
      .catch((error) => {
        res.status(500).json(error);
      })
  }

  async deleteAllUnverifiedEmail(req: Request, res: Response) {

    const { code } = req.body;

    try {

      if (code != process.env.CODE) { res.status(500).json({ code: false, message: "Não permitido!" }); }

      const listUsersResult = await Admin.listUsers();
      var list = [];
      // Percorra a lista de usuários
      for (const userRecord of listUsersResult.users) {
        // Verifique se o email não está verificado
        if (!userRecord.emailVerified) {
          // Exclua o usuário
          await Admin.deleteUser(userRecord.uid);
          list.push(userRecord.email);

        }

      }

      res.status(200).json(list);

    } catch (error) {
      res.status(500).json(error);
    }

  }

  async update(req: Request, res: Response) {

    const data = req.body;
    const user = await Admin.getUserByEmail(req.body.oldemail);

    Admin.updateUser(user.uid, data)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        res.status(200).json(userRecord);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  async sendEmailResetPassword(req: Request, res: Response) {

    const { email } = req.body;

    try {

      const link = await Admin.generatePasswordResetLink(email);
      const response = await new Email().send(email, link, 'Atualizar senha');

      res.status(200).json({ code: true, message: response });

    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   * 
   * @param req 
   * @param res 
   * @Doc https://developers.google.com/identity/oauth2/web/guides/overview?hl=pt-br
   * @Doc https://developers.google.com/identity/gsi/web/guides/display-button?hl=pt-br#javascript
   * @Console https://console.cloud.google.com/apis/credentials?project=terceiro-gestor&hl=pt-br&supportedpurview=project
   */
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

}