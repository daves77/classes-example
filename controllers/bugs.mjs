/* eslint-disable class-methods-use-this */
import sequelize from 'sequelize';

const { DatabaseError } = sequelize;

export default class BugsController {
  constructor(db) {
    this.route = 'Bug';
    this.db = db;
    this.bugs = this.db[this.route];
  }

  async getAll(req, res) {
    const data = await this.bugs.findAll();
    res.status(200).json(data);
  }

  async getBugForm(req, res) {
    res.render('home');
  }

  async postBugForm(req, res) {
    const data = req.body;

    try {
      const newBug = await this.bugs.create({
        problem: data.problem,
        errorText: data.error,
        commit: data.commit,
        featureId: Number(data.feature),
      });
      res.status(201).send(newBug);
    } catch (err) {
      if (err instanceof DatabaseError) {
        console.log('thisis database error');
        console.log(err);
      } else {
        console.log(err);
      }
    }
    console.log(data);
  }
}
