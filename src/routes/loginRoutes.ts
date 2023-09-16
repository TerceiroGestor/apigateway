import { Router } from 'express';
import { ValidateMiddleware } from '../middleware/ValidateMiddleware';
import { AuthenticationMiddleware } from '../middleware/AuthenticationMiddleware';

const loginRouter = Router();

loginRouter.post('/',
    ValidateMiddleware.validationRequest,
    ValidateMiddleware.validationPatternsEmailPassword,
    (req, res, next) => {
        new AuthenticationMiddleware().authenticate(req, res, next)
    }
);

loginRouter.delete('/',
    ValidateMiddleware.validationRequest,
    ValidateMiddleware.validationToken,
    (req, res, next) => {
        new AuthenticationMiddleware().signOut(req, res, next)
    }
);

export default loginRouter;