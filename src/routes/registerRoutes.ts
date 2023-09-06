
import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';

const registerRouter = Router();

registerRouter.post('/', new RegisterController().create); 
registerRouter.get('/verified', new RegisterController().emailVerified);
registerRouter.post('/resetpassword', new RegisterController().resetPassword);
registerRouter.get('/resetpassword', new RegisterController().verifyResetPassword);
registerRouter.post('/resetpassword/renew', new RegisterController().renewPassword);

/* registerRouter.get('/', new UserController().read);
registerRouter.post('/', new UserController().create);
registerRouter.put('/', new UserController().update);
registerRouter.delete('/', new UserController().delete);

registerRouter.post('/verifyemail', new UserController().verifyEmail);
registerRouter.put('/updatepassword', new UserController().sendEmailResetPassword);
registerRouter.delete('/unverifiedemail', new UserController().deleteAllUnverifiedEmail);

registerRouter.get('/googleauth', new UserController().googleAuth);
registerRouter.post('/googlecallback', new UserController().googleCallback); */

export default registerRouter;