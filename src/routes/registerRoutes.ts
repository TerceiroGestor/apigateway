
import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';
import { validationMiddleware } from '../middleware/validationMiddleware';

const registerRouter = Router();

registerRouter.post('/create', validationMiddleware, new RegisterController().create); 
registerRouter.get('/verified', new RegisterController().emailVerified);
registerRouter.post('/resetpassword', new RegisterController().resetPassword);
registerRouter.get('/resetpassword', new RegisterController().verifyResetPassword);
registerRouter.post('/resetpassword/renew', new RegisterController().renewPassword);

export default registerRouter;