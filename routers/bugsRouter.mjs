import express from 'express';

const router = express.Router();

const bugsRouter = (controller) => {
  router.get('/', controller.getBugForm.bind(controller));
  router.get('/bugs', controller.getAll.bind(controller));
  router.post('/bug-form', controller.postBugForm.bind(controller));

  return router;
};

export default bugsRouter;
