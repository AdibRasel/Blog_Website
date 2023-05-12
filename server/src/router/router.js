const express = require("express");
const Router = express.Router();

const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")

//User Controller
const UserController = require("../controller/ProfileController/ProfileController")


// User Profile
Router.post("/Registration", UserController.Registration);
Router.post("/Login", UserController.Login);
Router.post("/ProfileUpdate", AuthVerifyMiddleware, UserController.ProfileUpdate);
Router.get("/ProfileDetails", AuthVerifyMiddleware, UserController.ProfileDetails);
// Password Reset
Router.get("/RecoverVerifyEmail/:email", UserController.RecoverVerifyEmail);
Router.get("/RecoverVerifyOTP/:email/:otp", UserController.RecoverVerifyOTP);
Router.post("/RecoverResetPass", UserController.RecoverResetPass);












module.exports=Router