import express from 'express';

const router = express.Router();

const featuresRouter = (controller) => {
  router.get('/', controller.getAll.bind(controller));
  router.post('/new-feature', controller.postNewFeature.bind(controller));
  return router;
};

export default featuresRouter;
