import User from '../models/User';

class UserController {

  async store(req, res) {
    const userExists = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (userExists) {
      return res.status(400).json({
        message: 'Usuário já existe'
      })
    }

    const {
      id,
      name,
      email
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const {
      email,
      oldPassword,
      password,
      confirmPassword
    } = await req.body

    const user = await User.findByPk(req.userID);

    return res.status(200).json({
      email,
      oldPassword,
      password,
      confirmPassword
    })
  }

}

export default new UserController();