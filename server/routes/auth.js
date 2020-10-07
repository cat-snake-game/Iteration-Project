const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const passport = require('passport');

// router.delete('/delete', userController.deleteUser, (req, res) => {
//   console.log(`returning a DELETE req to '/api/delete' endpoint`);
//   const { username, played } = res.locals.user;
//   const bestRecord = res.locals.user.bestRecord || null;
//   res.status(200).json({ username, bestRecord, played });
// });

// router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// router.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function (req, res) {
//     console.log('what is response from google callback', res);
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   }
// );

// -----------------

// auth login    ("/auth..." path will be in server.js)
router.get('/login', (req, res) => {
  //handle with passport later
  console.log('triggering /auth/login route');
  res.send('logging in');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google

router.get('/google', (req, res) => {
  // handle with passport
  res.send('logging in with google auth');
});

module.exports = router;

// router methods will be exported to server.js
