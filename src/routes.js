import { Router } from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'


routes.get('/', (req, res) => {
  res.json({ message: 'Hello kroton'})
})

routes.post('/users', UserController.store)

routes.post('/session', SessionController.store)

export default routes;
