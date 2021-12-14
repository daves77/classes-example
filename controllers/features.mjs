export default class FeatureController {
  constructor(db) {
    this.route = 'Feature';
    this.db = db;
    this.features = this.db[this.route];
  }

  async getAll(req, res) {
    const data = await this.features.findAll();
    res.status(200).json(data);
  }

  async postNewFeature(req, res) {
    try {
      const { feature } = req.body;
      const newFeature = await this.features.create({
        name: feature,
      });
      res.status(201).send(newFeature);
    } catch (err) {
      console.log(err);
    }
  }
}
