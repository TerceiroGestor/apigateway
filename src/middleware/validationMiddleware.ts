import { Request, Response, NextFunction } from 'express';
import { Validator } from '../secure/Validator';
import { HttpStatusMessages } from '../secure/HttpStatusMessages';

export function validationMiddleware(req: Request, res: Response, next: NextFunction) {

  if (Object.keys(req.body).length === 0) {
    return res.status(417).json({error: HttpStatusMessages.getMessagePTBR(417)});
  }

  const validationErrors = new Validator().validate(req.body);

  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).json({error: HttpStatusMessages.getMessagePTBR(400), validationErrors});
  }

  next();
}
