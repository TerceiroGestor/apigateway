//Library
import { Router, Request, Response } from "express";
import listEndpoints from 'express-list-endpoints';

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
routes.get('/endpoints', (req: Request, res: Response) => {
  const endpoints = listEndpoints(routes as any);
  res.json(endpoints);
});

//Services Register
routes.route('/register')
  .post(new RegisterController().create)
  .delete(new RegisterController().delete)
  
routes.route('/googleauth')
  .get(new RegisterController().googleAuth)

routes.route('/googlecallback')
  .post(new RegisterController().googleCallback)

routes.route('/user')
  .get(authenticationMiddleware, authorizationMiddleware, new UserController().read)
  .put(authenticationMiddleware, authorizationMiddleware, new UserController().update)
  .delete(authenticationMiddleware, authorizationMiddleware, new UserController().delete)

routes.route('/login')
  .post(new LoginController().signIn)
  .get(authenticationMiddleware, authorizationMiddleware, new LoginController().signInState)
  .delete(authenticationMiddleware, authorizationMiddleware, new LoginController().signOut)

//routes.route('/trash/:param?');

routes.get('/logs', authenticationMiddleware, authorizationMiddleware, new LogController().read);

routes.route('/:item?/:value?')
  .post(new MainController().create)
  .get(new MainController().read)
  .put(new MainController().update)
  .delete(new MainController().delete)

export default routes;