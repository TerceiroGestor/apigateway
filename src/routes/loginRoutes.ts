import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';
const loginRouter = Router();

loginRouter.route('/')
    .post(new LoginController().signIn)
    .get(new LoginController().signInState)
    .delete(new LoginController().signOut)

export default loginRouter;