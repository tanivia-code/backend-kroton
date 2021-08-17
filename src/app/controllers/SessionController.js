class SessionController{

    async store( req, res) {
        res.json({ message: 'Tudo certo'})
    }
}

export default new SessionController();