import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';
class SessionController{

    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Senha é inválida'})
        }

        const { id, name, } = user;
        console.log(authConfig.secret)


        res.json({ message: 'qualquer coisa'})
    }
}

export default new SessionController();