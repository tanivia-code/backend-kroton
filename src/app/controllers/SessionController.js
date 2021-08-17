import jwt from 'jsonwebtoken';
class SessionController{

    async store(req, res) {
        const { email, password } = req.body;
        res.json({ message: 'Tudo certo'})
    }
}

export default new SessionController();