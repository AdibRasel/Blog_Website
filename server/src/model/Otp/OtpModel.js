const mongoose = require("mongoose")
const OPTSchema=mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type:String, default:"OtpNotChange"},
    createDate:{type:String, default:Date.now()}
},{versionKey:false});
const OTPSModel = mongoose.model("BlogSiteOtp", OPTSchema);
module.exports=OTPSModel