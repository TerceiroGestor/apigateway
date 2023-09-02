import { Router } from "express";
import registerRouter from "./registerRoutes";
import mainRouter from "./mainRoutes";
import googleRouter from "./googleRoutes";


const routes = Router();

//routes.use('/register', registerRouter);
routes.use('/auth', googleRouter);
routes.use('/', mainRouter);

export default routes;
