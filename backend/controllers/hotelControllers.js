const Hotel = require("../models/hotelModel");
const catchAsyncError = require("../services/catchAsyncError");
const appError = require("../services/appError");

exports.createHotel = catchAsyncError(async (req, res, next) => {
  const { name } = req.body;
  if (name) {
    return next(new appError("This hotel already exist"));
  }
  const hotel = await Hotel.create(req.body);
  res.status(201).json({ status: "success", hotel });
});

exports.updateHotel = catchAsyncError(async (req, res, next) => {
  const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!hotel) {
    return next(new appError("No hotel found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    message: "The hotel has been updated",
    hotel,
  });
});

exports.deleteHotel = catchAsyncError(async (req, res, next) => {
  const hotel = await Hotel.findByIdAndDelete(req.params.id);
  if (!hotel) {
    return next(new appError("No hotel found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    message: "The hotel has been deleted",
  });
});

exports.getSingleHotel = catchAsyncError(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);
  if (!hotel) {
    return next(new appError("No hotel found with the given id", 404));
  }
  res.status(200).json({
    status: "success",
    hotel,
  });
});
exports.getAllHotel = catchAsyncError(async (req, res, next) => {
  const hotels = await Hotel.find();

  res.status(200).json({
    status: "success",
    hotels,
  });
});
