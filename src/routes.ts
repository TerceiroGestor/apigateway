//Library
import { Router } from 'express';
import { Request, Response } from "express";

//Middleware
import authenticationMiddleware from './middleware/authenticationMiddleware';
import authorizationMiddleware from './middleware/authorizationMiddleware';

//Controllers
import { RegisterController } from './controllers/RegisterController';
import { LogController } from './controllers/LogController';


const routes = Router();

routes.get('/', (req, res) => {
  res.send('Connect Endpoint API Gateway');
});

//Services
routes.route('/register')
.post(new RegisterController().create)
.get(new RegisterController().read)
.put(new RegisterController().update)
.delete(new RegisterController().delete)

routes.get('/logs', new LogController().find);

export default routes;


/* 
.post(authenticationMiddleware, authorizationMiddleware, new RegisterController().create);
.get(authenticationMiddleware, authorizationMiddleware, new RegisterController().read);
.put(authenticationMiddleware, authorizationMiddleware, new RegisterController().update);
.delete(authenticationMiddleware, authorizationMiddleware, new RegisterController().delete); 
*/



/* import { RoleController } from './controllers/RoleController';
import { UserController } from './controllers/UserController';
 */

//ROLE
/* routes.get('/role', new RoleController().find);
routes.get('/role/:id', new RoleController().findOne);
routes.post('/role', new RoleController().create); */

//USER
/* routes.get('/user', new UserController().find);
routes.get('/user/:id', new UserController().findOne);
routes.post('/user', new UserController().create); */

//LOG