const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const EmailHelper = require("../utils/emailHelper");

const registerUser = async (req, res) => {
  try {
    const userExists = await userModel.findOne({ email: req?.body?.email });

    if (userExists) {
      return res.send({
        success: false,
        message: "User Already Exists",
      });
    }
    // hash the password
    const salt = await bcrypt.genSalt(10); // 2^10
    const hashedPassword = await bcrypt.hash(req?.body?.password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req?.body);
    await newUser.save();

    res.send({
      success: true,
      message: "Registration Successfull, Please Login",
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req?.body?.email });

    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist. Please register",
      });
    }

    const validatePassword = await bcrypt.compare(
      req?.body?.password,
      user.password
    );

    if (!validatePassword) {
      return res.send({
        success: false,
        message: "Please enter valid password",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res.send({
      success: true,
      message: "You've Successfully Logged In",
      data: token,
    });
  } catch (error) {
    console.log(error);
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId).select("-password");
    res.send({
      success: true,
      message: "User Details Fetched Successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (email == undefined) {
      return res.status(401).json({
        status: "failure",
        message: "Please enter the email for forget Password",
      });
    }
    let user = await userModel.findOne({ email: email });
    if (user == null) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    } else if (user?.otp != undefined && user.otp < Date.now()) {
      return res.json({
        success: false,
        message: "Please use otp sent on mail",
      });
    }
    const otp = Math.floor(Math.random() * 10000 + 90000);
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();
    await EmailHelper("otp.html", user.email, {
      name: user.name,
      otp: otp,
    });
    res.status(200).json({
      success: true,
      message: "otp has been sent",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password, otp } = req.body;
    if (password == undefined || otp == undefined) {
      return res.status(401).json({
        success: false,
        message: "invalid request",
      });
    }
    const user = await userModel.findOne({ otp: otp });
    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    if (Date.now() > user.otpExpiry) {
      return res.status(401).json({
        success: false,
        message: "otp expired",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req?.body?.password, salt);
    user.password = hashedPassword;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "password reset successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  registerUser,
  loginUser,
  currentUser,
  forgetPassword,
  resetPassword,
};
