const UserModel = require("../../model/User/UserModel");
const OTPSModel = require("../../model/Otp/OtpModel");
const UserCreateService = require("../../service/user/UserCreate");
const UserLoginService = require("../../service/user/UserLogin");
const UserUpdateService = require("../../service/user/UserUpdate");
const UserDetailsService = require("../../service/user/UserRead");
const VerifyUserEmail = require("../../service/user/VerifyUserEmail");
const VerifyOtp = require("../../service/user/VerifyOtp");
const ResetPassword = require("../../service/user//ResetPassword")



exports.Registration = async (req, res)=>{
    let Result = await UserCreateService(req, UserModel)
    res.status(200).json(Result)
}

exports.Login = async (req, res)=>{
    let Result = await UserLoginService(req, UserModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate = async (req, res)=>{
    let Result = await UserUpdateService(req, UserModel)
    res.status(200).json(Result)
}

exports.ProfileDetails = async (req, res)=>{
    let Result = await UserDetailsService(req, UserModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyEmail = async (req, res)=>{
    let Result = await VerifyUserEmail(req, UserModel)
    res.status(200).json(Result)
}

exports.RecoverVerifyOTP = async (req, res)=>{
    let Result = await VerifyOtp(req, OTPSModel)
    res.status(200).json(Result)
}

exports.RecoverResetPass = async (req, res)=>{
    let Result = await ResetPassword(req, UserModel)
    res.status(200).json(Result)
}

exports.OTPDataDelete = async (req, res)=>{
    let Result = await OTPDataDelete(req, OTPSModel)
    res.status(200).json(Result)
}