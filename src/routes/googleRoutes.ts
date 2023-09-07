import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
const googleRouter = Router();

googleRouter.route('/').get(new AuthController().auth)
googleRouter.route('/callback').get(new AuthController().authCallBack)
googleRouter.route('/signout').delete(new AuthController().authSignOut)

export default googleRouter;