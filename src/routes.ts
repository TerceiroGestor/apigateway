import { Router } from 'express';
import { RoleController } from './controllers/RoleController';
import { UserController } from './controllers/UserController';
import { LogController } from './controllers/LogController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Connect Endpoint API Gateway');
});

//ROLE
routes.get('/role', new RoleController().find);
routes.get('/role/:id', new RoleController().findOne);
routes.post('/role', new RoleController().create);
//update
//delete

//USER
routes.get('/user', new UserController().find);
routes.get('/user/:id', new UserController().findOne);
routes.post('/user', new UserController().create);
//update
//delete

//LOG
routes.get('/logs', new LogController().find);
routes.get('/logs/:id', new LogController().findOne);

export default routes;