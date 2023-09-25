const User = require("../models/userModel");
const catchAsyncError = require("../services/catchAsyncError");
const appError = require("../services/appError");

exports.createUser = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  if (name || email) {
    return next(new appError("This user already exist"));
  }
  const user = await User.create(req.body);
  res.status(201).json({ status: "success", user });
});

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(new appError("No user found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    message: "The user has been updated",
    user,
  });
});

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(new appError("No user found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    message: "The user has been deleted",
  });
});

exports.getSingleUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new appError("No user found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    user,
  });
});
exports.getAllUser = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    users,
  });
});
