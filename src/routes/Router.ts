import { Router } from "express";
import registerRouter from "./registerRoutes";
import mainRouter from "./mainRoutes";
import googleRouter from "./googleRoutes";
import loginRouter from "./loginRoutes";
import jokesRouter from "./jokesRoutes";

const routes = Router();

routes.use('/register', registerRouter);
routes.use('/login', loginRouter);
routes.use('/auth', googleRouter);
routes.use('/jokes', jokesRouter);

routes.use('/', mainRouter);


export default routes;
