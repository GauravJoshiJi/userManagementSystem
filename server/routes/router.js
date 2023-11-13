const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

// @description Root Route
// @method GET/
route.get("/", services.homeRoutes);
// @description for add users
// @method GET/add-user
route.get("/add-user", services.add_user);
// @description for update user
// @method GET/update-user
route.get("/update-user", services.update_user);

//C.R.U.D API routes
//Create API
route.post("/api/users", controller.create);
//Read API
route.get("/api/users", controller.find);
//UPdate API
route.put("/api/users/:id", controller.update);
//Delete API
route.delete("/api/users/:id", controller.delete);

module.exports = route;
