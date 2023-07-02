import { Router } from 'express';
import { MainController } from '../controllers/MainController';
const mainRouter = Router();

mainRouter.route('/:item?/:value?')
    .post(new MainController().create)
    .get(new MainController().read)
    .put(new MainController().update)
    .delete(new MainController().delete)

export default mainRouter;