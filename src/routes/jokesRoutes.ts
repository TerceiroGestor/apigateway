
import { Router } from 'express';
import { JokesController } from '../controllers/JokesController';
import { ValidateMiddleware } from '../middleware/ValidateMiddleware';

const jokesRouter = Router();

jokesRouter.post('/', ValidateMiddleware.validationRequest, ValidateMiddleware.validationToken, new JokesController().create );
jokesRouter.get('/', ValidateMiddleware.validationRequest, ValidateMiddleware.validationToken, new JokesController().read);
jokesRouter.put('/', ValidateMiddleware.validationRequest, ValidateMiddleware.validationToken,);
jokesRouter.delete('/', ValidateMiddleware.validationRequest, ValidateMiddleware.validationToken,);

export default jokesRouter;