import { Router } from 'express';
import { RoleController } from './controllers/RoleController';
import { UserController } from './controllers/UserController';
import { LogController } from './controllers/LogController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Connect Endpoint API Gateway');
});

//ROLE
routes.post('/role', new RoleController().create);

//USER
routes.get('/user', new UserController().read);
routes.post('/user', new UserController().create);

//LOG
routes.get('/logs', new LogController().read);

export default routes;