import { Router } from 'express';
import { RoleController } from './controllers/RoleController';
import { UserController } from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Connect Endpoint API Gateway');
});

//ROLE
routes.post('/role', new RoleController().create);

//USER
routes.get('/user', new UserController().read);
routes.post('/user', new UserController().create);


export default routes;