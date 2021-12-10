/* eslint-disable class-methods-use-this */
export default class BugsController {
  // constructor(db) {
  //   this.db = db;
  // }

  async getHomePage(req, res) {
    res.render('home');
  }
}
