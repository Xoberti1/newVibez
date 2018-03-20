const router = require("express").Router();
const userController = require ("./registration");

router.use("/registration", userController);

module.exports = router;

