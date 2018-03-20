const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const controller = require("../../controllers/userController")
const passport = require("passport");
const router = express.Router();


  router.route('/registration')
  .get(controller.findAll)
  .post(controller.create);



module.exports = router;