import { Request, Response, NextFunction } from 'express';
import { auth } from "../auth/firebaseConfig";

async function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {

  const token = req.header('Authorization');
  const user = auth.currentUser;

  if (!token) {
    return res.status(401).json({ message: 'Authentication token not provided' });
  }
  
  if (!user) {
    return res.status(401).json({ message: 'User credentials not found' });
  }

  const tokenUser = await user.getIdToken()

  if (token === tokenUser) {
    next();
  } else {
    res.status(500).json({ message: 'No authenticated user.' });
  }
}

export default authenticationMiddleware;
