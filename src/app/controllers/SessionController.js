import jwt from 'jsonwebtoken';

import User from '../models/User';
import auth from '../../config/auth';
class SessionController{

    async store(req, res) {
        const { email, password } = req.body;
        res.json({ message: 'Tudo certo'})
    }
}

export default new SessionController();