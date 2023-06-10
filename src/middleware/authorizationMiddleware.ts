import { Request, Response, NextFunction } from 'express';

async function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = true;

  if(authorization){
    next();
  }else{
    res.status(500).json({message:'Not autorization'})
  }
  
}

export default authorizationMiddleware;
