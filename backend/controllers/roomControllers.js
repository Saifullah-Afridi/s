const Room = require("../models/roomModel");

const appError = require("../services/appError");
const catchAsyncError = require("../services/catchAsyncError");

exports.createRoom = catchAsyncError(async (req, res, next) => {
  req.body.room = req.params.hotelId;
  const room = await Room.create(req.body);
  res.status(201).json({
    status: "success",
    room,
  });
});

exports.updateRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!room) {
    return next(new appError("No room found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    message: "The room has been updated",
    room,
  });
});

exports.deleteRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findByIdAndDelete(req.params.id);
  if (!room) {
    return next(new appError("No room found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    message: "The room has been deleted",
  });
});

exports.getSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.params.id);
  if (!room) {
    return next(new appError("No room found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    room,
  });
});
exports.getAllRoom = catchAsyncError(async (req, res, next) => {
  const rooms = await Room.find();

  res.status(200).json({
    status: "success",
    rooms,
  });
});
