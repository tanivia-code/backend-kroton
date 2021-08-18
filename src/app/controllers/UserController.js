import * as Yup from 'yup';
import User from '../models/User';

class UserController {

  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email }
    });

    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe' })
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6).when(
        'oldPassword', (oldPassword, field) => oldPassword ? field.required() : field
      ),
      confirmPassword: Yup.string().when(
        'password', (password, field) => password ? field.required().oneOf([Yup.ref('password')]) : field)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Falha da validação' })
    }

    const { email, oldPassword } = await req.body;

    const user = await User.findByPk(req.userID);
    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email }})
      if (userExists) {
        return res.status(400).json({ error: 'Oops deu ruim'})
      }
    }

    const { authorization } = await req.headers;

   

    return res.status(200).json({user});
  }

}

export default new UserController();