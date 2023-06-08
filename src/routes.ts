//Library
import { Router } from 'express';
import { Request, Response } from "express";

//Middleware
import authenticationMiddleware from './middleware/authenticationMiddleware';
import authorizationMiddleware from './middleware/authorizationMiddleware';

//Controllers
import { MainController } from './controllers/MainController';
import { RegisterController } from './controllers/RegisterController';
import { LogController } from './controllers/LogController';


const routes = Router();

//Main
routes.route('/')
  .post(new MainController().create)
  .get(new MainController().read)
  .put(new MainController().update)
  .delete(new MainController().delete)

//Services Register
routes.route('/register')
  .post(new RegisterController().create)
  .get(new RegisterController().read)
  .put(new RegisterController().update)
  .delete(new RegisterController().delete)

routes.route('/trash/:param?')
  .post(new RegisterController().create)
  .get(new RegisterController().read)
  .put(new RegisterController().update)
  .delete(new RegisterController().delete)

routes.get('/logs', new LogController().read);

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