import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

// import bindRoutes from './routes.mjs';
import bugsRouter from './routers/bugsRouter.mjs';
import featuresRouter from './routers/featuresRouter.mjs';
import usersRouter from './routers/usersRouter.mjs';

import BugsController from './controllers/bugs.mjs';
import FeatureController from './controllers/features.mjs';
import UserController from './controllers/users.mjs';

import db from './models/index.mjs';

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));

const featureController = new FeatureController(db);
const bugsController = new BugsController(db);
const userController = new UserController(db);

app.use('/', bugsRouter(bugsController));
app.use('/features', featuresRouter(featureController));
app.use('/users', usersRouter(userController));

// Set Express to listen on the given port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
