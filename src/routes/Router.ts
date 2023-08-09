import { Router } from "express";
import signupRouter from "./signupRoutes";
import mainRouter from "./mainRoutes";
import googleRouter from "./googleRoutes";

const routes = Router();

routes.use('/signup', signupRouter);
routes.use('/auth', googleRouter);

routes.use('/', mainRouter);
export default routes;
