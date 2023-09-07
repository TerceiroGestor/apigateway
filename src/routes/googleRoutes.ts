import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { validationMiddleware } from "../middleware/validationMiddleware";
const googleRouter = Router();

googleRouter.route('/').get(validationMiddleware, new AuthController().auth)
googleRouter.route('/callback').get(validationMiddleware , new AuthController().authCallBack)
googleRouter.route('/signout').delete(validationMiddleware, new AuthController().authSignOut)

export default googleRouter;