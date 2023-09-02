import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
const googleRouter = Router();

googleRouter.route('/').get(new AuthController().Auth)
googleRouter.route('/callback').get(new AuthController().callBack)
googleRouter.route('/signout').delete(new AuthController().signOut)

export default googleRouter;