
import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const registerRouter = Router();

registerRouter.get('/', new UserController().read);
registerRouter.post('/', new UserController().create);
registerRouter.put('/', new UserController().update);
registerRouter.delete('/', new UserController().delete);

registerRouter.post('/verifyemail', new UserController().verifyEmail);
registerRouter.put('/updatepassword', new UserController().sendEmailResetPassword);
registerRouter.delete('/unverifiedemail', new UserController().deleteAllUnverifiedEmail);

registerRouter.get('/googleauth', new UserController().googleAuth);
registerRouter.post('/googlecallback', new UserController().googleCallback);

export default registerRouter;