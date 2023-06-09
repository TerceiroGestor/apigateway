import { Request, Response, NextFunction } from 'express';
import { auth } from "../auth/firebaseConfig";
import { getAuth, getIdToken } from "firebase/auth";


function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
  res.status(200).json(auth.currentUser);
  next();
}

export default authenticationMiddleware;
