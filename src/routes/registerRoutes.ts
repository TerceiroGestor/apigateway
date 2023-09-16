
import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';
import { ValidateMiddleware } from '../middleware/ValidateMiddleware';

const registerRouter = Router();

registerRouter.post('/create', ValidateMiddleware.validationRequest, ValidateMiddleware.validationPatternsEmailPassword, new RegisterController().create);
registerRouter.get('/verified', ValidateMiddleware.validationParams, ValidateMiddleware.validationEmail, new RegisterController().emailVerified);

registerRouter.post('/resetpassword', ValidateMiddleware.validationRequest, ValidateMiddleware.validationPatternsEmail, new RegisterController().resetPassword);
registerRouter.get('/resetpassword', ValidateMiddleware.validationParams, ValidateMiddleware.validationEmail, new RegisterController().verifyResetPassword);
registerRouter.put('/resetpassword', ValidateMiddleware.validationRequest, ValidateMiddleware.validationPatternsEmailPassword, ValidateMiddleware.validationToken, new RegisterController().renewPassword);

export default registerRouter;