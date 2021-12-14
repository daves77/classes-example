/* eslint-disable class-methods-use-this */
import hash from '../utils/hash.mjs';

export default class UserController {
  constructor(db) {
    this.db = db;
    this.route = 'User';
    this.users = this.db[this.route];
  }

  async getSignUpForm(req, res) {
    res.render('sign-up');
  }

  async getLoginForm(req, res) {
    res.render('login');
  }

  async postSignUpForm(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    const hashedPassword = await hash.hashPassword(password);

    const newUser = await this.users.create({
      email,
      password: hashedPassword,
    });

    res.send(newUser);
  }

  async postLoginForm(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    const user = await this.users.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const match = await hash.comparePassword(password, user.password);
      if (match) {
        console.log('issa match');
      } else {
        res.send('wrong pw');
      }
    }
  }
}
