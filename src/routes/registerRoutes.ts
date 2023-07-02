
import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';

const registerRouter = Router();

registerRouter.post('/', new RegisterController().create); // registrar e enviar o link para verificação
registerRouter.put('/', new RegisterController().update); // atualizar dados do usuário
registerRouter.put('/updatepassword', new RegisterController().sendEmailResetPassword);// atualizar senhar
registerRouter.delete('/', new RegisterController().delete); // deletar um email cadastrado

registerRouter.post('/verifyemail', new RegisterController().verifyEmail);
registerRouter.delete('/unverifiedemail', new RegisterController().deleteAllUnverifiedEmail); // deletar todos os emails que não foram verificados

export default registerRouter;