import {
    Router
} from 'express';
const routes = new Router();

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AppointmentsController from './app/controllers/AppointmentsController';

import authMiddleware from './app/middleware/auth'


routes.get('/', (req, res) => {
    res.json({
        message: 'Hello kroton'
    })
})

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

// todas as rotas autenticadas
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/appointments', AppointmentsController.index);

routes.post('/appointments', AppointmentsController.store);

export default routes;