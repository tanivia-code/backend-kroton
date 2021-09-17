import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AppointmentsController from './app/controllers/AppointmentsController';
import FileController from './app/controllers/FileController';
import NotificationsController from './app/controllers/NotificationsController';

import authMiddleware from './app/middleware/auth';
import multerConfig from './config/multer';

const routes = new Router();
const uploads = multer(multerConfig);


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

// notifications
routes.get('/notifications', NotificationsController.index);
routes.put('/notifications/:id', NotificationsController.update);


// upload files
routes.post('/files', uploads.single('file'), FileController.store);

export default routes;