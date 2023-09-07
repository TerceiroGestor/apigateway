import { Request, Response, NextFunction } from 'express';
import { Validator } from '../secure/Validator';
import { HttpStatusMessages } from '../secure/HttpStatusMessages';
import { CustomError } from './customError';
import { Token } from '../secure/Token';


export class validateMiddleware {

  static validationRequest(req: Request, res: Response, next: NextFunction) {

    try {

      if (Object.keys(req.body).length === 0) {
        throw new CustomError(400, 'Requisição vazia!', 'Os dados necessários não foram enviados', {});
      }

      const validation = new Validator().validate(req.body);
      if (Object.keys(validation).length > 0) {
        throw new CustomError(400, 'Validation Error!', ' Erro na validação dos dados!', validation);
      }

    } catch (error) {
      next(error);
    }

    next();
  }

  static validationParams(req: Request, res: Response, next: NextFunction) {

    try {

      if (Object.keys(req.query).length === 0) {
        throw new CustomError(400, 'Requisição vazia!', 'Os dados necessários não foram enviados', {});
      }

    } catch (error) {
      next(error);
    }

    next();
  }

  static async validationPatterns(req: Request, res: Response, next: NextFunction) {

    try {
      const message = HttpStatusMessages.getMessage(400, 'en');
      const email = new Validator().isEmailValid(req.body.email);
      const password = new Validator().isPasswordValid(req.body.password);

      if (!email) {
        throw new CustomError(message.code, message.title, message.description, email);
      }

      if (!password) {
        throw new CustomError(message.code, message.title, message.description, password);
      }

    } catch (error) {
      next(error);
    }

    next();
  }

  static async validationToken(req: Request, res: Response, next: NextFunction) {

    try {

      const message = HttpStatusMessages.getMessage(401, 'en');
      const validate = await new Token().validateToken(req.query.token as string);
      if (!validate.validate) {
        throw new CustomError(message.code, message.title, message.description, {});
      }

    } catch (error) {
      next(error);
    }

    next();
  }

}