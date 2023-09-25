const User = require("../models/userModel");
const catchAsyncError = require("../services/catchAsyncError");
const appError = require("../services/appError");
const jwt = require("jsonwebtoken");
exports.register = catchAsyncError(async (req, res, next) => {
  const { email, userName, password, passwordConfirm } = req.body;
  const userExist = await User.findOne({ email, userName });
  if (userExist) {
    return next(new appError("This email already exist", 400));
  }
  const user = await User.create({
    email,
    userName,
    password,
    passwordConfirm,
  });
  res.status(201).json({
    status: "success",
    user,
  });
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new appError("Please Provide password and email"));
  }
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(user.password))) {
    return next(new appError("Please provide correct email and password", 400));
  }
  const token = await jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.SECRET_KEY
  );
  res.cookie("token", token, { httpOnly: true }).status(200).json({
    status: "success",
    user,
    token,
  });
});

exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
    message: "you are logout",
  });
});

exports.protected = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookie.token;
  }
  if (!token) {
    return next(new appError("Please login to access this page", 404));
  }
  const payload = await jwt.verify(token, process.env.SECRET_KEY);
  const currentUser = await User.findOne({ _id: payload.id });
  if (!currentUser) {
    return next(
      new appError(
        "the user belong to this token does not exist please login and try later",
        400
      )
    );
  }
  req.user = currentUser;
  next();
});

exports.restrictedToAdmin = catchAsyncError(async (req, res, next) => {
  const { isAdmin } = req.user;
  if (isAdmin !== true) {
    return next(
      new appError("you are not allowed to perform this action "),
      403
    );
  }
  next();
});
