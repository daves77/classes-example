import express from 'express';

const router = express.Router();

const usersRouter = (controller) => {
  router.get('/signup', controller.getSignUpForm.bind(controller));
  router.post('/signup', controller.postSignUpForm.bind(controller));
  router.get('/login', controller.getLoginForm.bind(controller));
  router.post('/login', controller.postLoginForm.bind(controller));
  return router;
};

export default usersRouter;
