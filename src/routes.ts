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


const routes = Router();

//Main
routes.route('/')
  .post(authenticationMiddleware, new MainController().create)
  .get(new MainController().read)
  .put(new MainController().update)
  .delete(new MainController().delete)

//Services Register
routes.route('/register')
  .post(new RegisterController().create)
  .get(new RegisterController().read) 
  .put(new RegisterController().update) // atualizações
  .delete(new RegisterController().delete) // delete

routes.route('/login')
  .post(new LoginController().signIn) // OK signIn está funcionando
  .get(new LoginController().read)
  .delete(new LoginController().signOut) // FALTA o signOut

routes.route('/trash/:param?')
  .post(new RegisterController().create)
  .get(new RegisterController().read)
  .put(new RegisterController().update)
  .delete(new RegisterController().delete)

routes.get('/logs', new LogController().read);

export default routes;