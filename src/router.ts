import { Router } from 'express';
import { RoleController } from './controllers/RoleController';

const router = Router();

router.get('/', (req, res) => {
  res.send('Connect Endpoint API Gateway');
});

router.post('/role', new RoleController().create);

export default router;