import { Request, Response, NextFunction } from 'express';

function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
  // Adicione o cabeçalho personalizado
  res.setHeader('X-Meu-Middleware', 'Valor personalizado');

  // Chame o próximo middleware
  next();
}

export default authorizationMiddleware;
