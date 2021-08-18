import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';


routes.get('/', (req, res) => {
  res.json({
    message: 'Hello kroton'
  })
});

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

// todas as rotas autenticadas

routes.use(authMiddleware);

routes.put('/users', authMiddleware, UserController.update);

export default routes;