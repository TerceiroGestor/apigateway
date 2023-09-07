
import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';
import { validateMiddleware } from '../middleware/validationMiddleware';

const registerRouter = Router();

registerRouter.post('/create', validateMiddleware.validationRequest, validateMiddleware.validationPatterns, new RegisterController().create); 
registerRouter.get('/verified', validateMiddleware.validationParams, validateMiddleware.validationToken, new RegisterController().emailVerified);
registerRouter.post('/resetpassword', new RegisterController().resetPassword);
registerRouter.get('/resetpassword', new RegisterController().verifyResetPassword);
registerRouter.post('/resetpassword/renew', new RegisterController().renewPassword);

export default registerRouter;