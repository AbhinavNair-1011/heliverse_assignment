const Router=require("express").Router();
const controller=require("../controller/teamController")

Router.post("/api/addUserToTeam",controller.addUserToTeam)
Router.get("/api/fetchTeam",controller.fetchTeam)

module.exports=Router