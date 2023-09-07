import { Router } from "express";
import { validationMiddleware } from "../middleware/validationMiddleware";

import registerRouter from "./registerRoutes";
import mainRouter from "./mainRoutes";
import googleRouter from "./googleRoutes";


const routes = Router();

//routes.use('/register', middleware registerRouter);
routes.use('/auth', googleRouter);
routes.use('/register', registerRouter)
routes.use('/', mainRouter);


export default routes;
