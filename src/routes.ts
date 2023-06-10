//Library
import { Router } from 'express';
import { Request, Response } from "express";

//Middleware
import authenticationMiddleware from './middleware/authenticationMiddleware';
import authorizationMiddleware from './middleware/authorizationMiddleware';

//Controllers
import { MainController } from './controllers/MainController';
import { RegisterController } from './controllers/RegisterController';
import { LoginController } from './controllers/LoginController';
import { LogController } from './controllers/LogController';
import { UserController } from './controllers/UserController';


const routes = Router();

//Main
routes.route('/:item?/:value?')
  .post(new MainController().create)
  .get(new MainController().read)
  .put(new MainController().update)
  .delete(new MainController().delete)
  
//Services Register
routes.route('/register')
  .post(new RegisterController().create) // register in firebase and database

routes.route('/user')
  .get(authenticationMiddleware, authorizationMiddleware, new UserController().read)
  .put(authenticationMiddleware, authorizationMiddleware, new UserController().update) // atualizações
  .delete(authenticationMiddleware, authorizationMiddleware, new UserController().delete) // delete

routes.route('/login')
  .post(new LoginController().signIn) // OK
  .get(authenticationMiddleware, authorizationMiddleware, new LoginController().signInState) // OK
  .delete(authenticationMiddleware, authorizationMiddleware, new LoginController().signOut) // OK

//routes.route('/trash/:param?');

routes.get('/logs', authenticationMiddleware, authorizationMiddleware, new LogController().read);

export default routes;