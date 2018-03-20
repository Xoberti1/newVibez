const path = require("path");
// attach all routes to this constant "routes"
const routes = require("express").Router();
const passportRoutes = require("./signin");
const registrationRoutes = require("./registration");

// auth Routes
routes.use("/auth", passportRoutes);
routes.use("/", registrationRoutes);

// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = routes;
