import { Router } from 'express';
import { RegisterController } from '../controllers/RegisterController';
const googleRouter = Router();

googleRouter.route('/')
  .get(new RegisterController().googleAuth)
  .post(new RegisterController().googleCallback)

  

export default googleRouter;