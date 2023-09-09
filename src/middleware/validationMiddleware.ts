import { Request, Response, NextFunction } from 'express';
import { Validator } from '../secure/Validator';
import { CustomError } from '../secure/CustomError';
import { Token } from '../secure/Token';
import { ValidationData } from '../secure/ValidationData';

export class validateMiddleware {

  static validationRequest(req: Request, res: Response, next: NextFunction) {

    try {

      if (Object.keys(req.body).length === 0) {
        throw new CustomError(400, { message: 'Empty request!' });
      }

      const validation = new Validator().validate(req.body);
      if (Object.keys(validation).length > 0) {
        throw new CustomError(400, validation);
      }

    } catch (error) {
      next(error);
    }

    next();
  }

  static validationParams(req: Request, res: Response, next: NextFunction) {

    try {

      if (Object.keys(req.query).length === 0) {
        throw new CustomError(400);
      }

    } catch (error) {
      next(error);
    }

    next();
  }

  static async validationPatterns(req: Request, res: Response, next: NextFunction) {

    try {

      const email = new Validator().isEmailValid(req.body.email);
      const password = new Validator().isPasswordValid(req.body.password);

      if (!email) {
        throw new CustomError(400, { message: 'Invalid email!', email: email });
      }

      if (!password) {
        throw new CustomError(400, { message: 'Invalid password!', password: password });
      }

    } catch (error) {
      next(error);
    }

    next();
  }

  static async validationToken(req: Request, res: Response, next: NextFunction) {

    try {

      const validate = await new Token().validateToken(req.query.token as string);
      if (!validate.validate) { throw new CustomError(401); }
      
      
      const validationData = ValidationData.getInstance();
      validationData.setValid(validate.validate);

    } catch (error) {
      next(error);
    }

    next();
  }

}