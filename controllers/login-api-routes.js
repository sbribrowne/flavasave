// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const validateInput = require("../scripts/validations/signup");
const isEmpty = require("lodash.isempty");

module.exports = function(app) {
  // High order function to first check if there is an existing user email
  function validateInputQuery(data, otherValid) {
    let { errors } = otherValid(data);

    return db.User.findOne({
      where: { email: data.email }
    }).then(function(user) {
      if (user) {
        if (user.get("email") === data.email) {
          errors.email = "Sorry, this E-mail is already taken";
        }
      }
      return { errors, isValid: isEmpty(errors) };
    });
  }

  // Route for signing up a user, use validateInputQuery function first to identify exisitng email then if valid, continue to db to create user
  app.post("/api/signup", function(req, res) {
    validateInputQuery(req.body, validateInput).then(({ errors, isValid }) => {
      if (isValid) {
        // console.log(req.body);
        const { email, password } = req.body;

        db.User.create({ email, password })
          .then(function() {
            res.redirect(307, "/api/login");
          })
          .catch(function(err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
          });
      } else {
        res.status(400).json(errors);
      }
    });
  });

  // Using the passport.authenticate middleware and callback with our local strategy.
  // If the user has invalid login credentials, send status 401 with form message, if user is not invalid, try login again and send user data
  app.post("/api/login", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).send({ form: "Invalid Credentials" });
      } else {
        req.logIn(user, function(err) {
          if (err) {
            return next(err);
          }
          return res.send(req.user);
        });
      }
    })(req, res, next);
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.session.destroy();
    req.logout();
    res.sendStatus(200);
    console.log("user has logged out on server side");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
