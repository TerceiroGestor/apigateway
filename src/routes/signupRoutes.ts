
import { Router } from 'express';
import { SignupController } from '../controllers/SignupController';

const signupRouter = Router();

signupRouter.post('/', new SignupController().create); // registrar e enviar o link para verificação
signupRouter.put('/', new SignupController().update); // atualizar dados do usuário
signupRouter.put('/updatepassword', new SignupController().sendEmailResetPassword);// atualizar senhar
signupRouter.delete('/', new SignupController().delete); // deletar um email cadastrado

signupRouter.post('/verifyemail', new SignupController().verifyEmail);
signupRouter.delete('/unverifiedemail', new SignupController().deleteAllUnverifiedEmail); // deletar todos os emails que não foram verificados

export default signupRouter;