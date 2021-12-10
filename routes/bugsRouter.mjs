import express from 'express';

const router = express.Router();

const bugsRouter = (controller) => {
  router.get('/', controller.getHomePage);

  return router;
};

export default bugsRouter;
