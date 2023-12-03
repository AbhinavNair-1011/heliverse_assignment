const Router=require("express").Router();
const controller=require("../controller/usersController")

Router.get("/api/allUsers",controller.fetchAllUsers)
Router.get("/api/paginatedUsers/:pageNumber",controller.paginatedUsers)

module.exports=Router