import { Router } from "express";
import registerRouter from "./registerRoutes";
import mainRouter from "./mainRoutes";
import googleRouter from "./googleRoutes";
import loginRouter from "./loginRoutes";
import jokesRouter from "./jokesRoutes";
import { ValidateMiddleware } from "../middleware/ValidateMiddleware";

const routes = Router();

routes.use('/register', ValidateMiddleware.validationHeader, registerRouter);
routes.use('/login', ValidateMiddleware.validationHeader, loginRouter);
routes.use('/auth', ValidateMiddleware.validationHeader, googleRouter);
routes.use('/jokes', ValidateMiddleware.validationHeader, jokesRouter);

routes.use('/', ValidateMiddleware.validationHeader, mainRouter);

export default routes;
