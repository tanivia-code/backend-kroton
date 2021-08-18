import jwt from 'jsonwebtoken';
import { json } from 'sequelize/types';

export default async (req, res, next) => {
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
        return res.status(401).json({ message: 'É necessário estar logado'})
    }
}
