import express from 'express';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

// import bindRoutes from './routes.mjs';
import bugsRouter from './routes/bugsRouter.mjs';
import BugsController from './controllers/bugs.mjs';

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

const bugsController = new BugsController();
app.use('/', bugsRouter(bugsController));

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT);
