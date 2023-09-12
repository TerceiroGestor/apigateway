
import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';
import { validateMiddleware } from '../middleware/validationMiddleware';

const registerRouter = Router();

registerRouter.post('/create',
    validateMiddleware.validationRequest,
    validateMiddleware.validationPatterns,
    
    new RegisterController().create);

registerRouter.get('/verified',
    validateMiddleware.validationParams,
    validateMiddleware.validationEmail,
    new RegisterController().emailVerified);

registerRouter.post('/resetpassword',
    validateMiddleware.validationRequest,
    validateMiddleware.validationPatternsEmail,
    new RegisterController().resetPassword);

registerRouter.get('/resetpassword',
    validateMiddleware.validationParams,
    validateMiddleware.validationToken,
    new RegisterController().verifyResetPassword);

registerRouter.post('/resetpassword/renew',
    validateMiddleware.validationRequest,
    validateMiddleware.validationPatterns,
    validateMiddleware.validationToken,
    new RegisterController().renewPassword);

export default registerRouter;