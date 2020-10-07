require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const PORT = 3000;
const app = express();
const path = require('path');

// import auth route methods from auth.js
const authRoutes = require('./routes/auth');

const apiRouter = require('./routes/api');
// const passport = require("passport");
// const cookieSession = require("cookie-session");
// const cookieParser = require("cookie-parser");
// const authRouter = require("./routes/auth");
// require('./passport-setup');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// app.use(cookieParser());

// // session
// app.use(
//   cookieSession({
//     name: 'session',
//     keys: ['key1', 'key2'],
//   })
// );

// // passport
// app.use(passport.initialize());
// app.use(passport.session());

// set up our auth routes from auth.js to be used in server.js.
// only go to auth paths when we have root "/auth..."
// app.get('/', (req, res) => console.log('inside the server'));

// app.use('/auth', authRouter);
app.use(
  '/auth',
  (req, res, next) => {
    console.log('inside server.js');
    next();
  },
  authRoutes
);

app.use('/api', apiRouter);

// best practice if condition:  equal to "production"/"development"
// production, be sure to serve html file. For Dev, just comment it now for now:

// npm run server -- production comment back in 55-61
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'));
// });

// app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err); // err = {message: 'error message'}
  res.status(500).json(err);
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
