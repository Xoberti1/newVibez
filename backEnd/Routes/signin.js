const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const authRouter = express.Router();


// express.cookieParser();
// express.bodyParser();
// express.cookieSession(); // Express cookie session middleware 
// passport.initialize();   // passport initialize middleware
// passport.session();      // passport session middleware 
// passport.initialize();
// passport.session();

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (obj, done) {
//     done(null, obj);
// });

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    })

);
authRouter.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        // If this function gets called, authentication was successful.
        // `req.` contains the authenticated user.
        res.redirect('/users/' + req.username);
        console.log("you signed in")
    });

module.exports = authRouter