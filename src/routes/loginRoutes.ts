import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';
import { validateMiddleware } from '../middleware/validationMiddleware';
const loginRouter = Router();

loginRouter.post('/', validateMiddleware.validationRequest, validateMiddleware.validationPatternsEmailPassword, new LoginController().signIn);
loginRouter.get('/', validateMiddleware.validationRequest, validateMiddleware.validationPatternsEmail, new LoginController().signInState);
loginRouter.delete('/', validateMiddleware.validationRequest, validateMiddleware.validationToken, new LoginController().signOut);

export default loginRouter;