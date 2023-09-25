const express = require("express");
const router = express.Router();
const {
  createHotel,
  getAllHotel,
  updateHotel,
  getSingleHotel,
  deleteHotel,
} = require("../controllers/hotelControllers");
const {
  protected,
  restrictedToAdmin,
} = require("../controllers/authControllers");

router
  .route("/")
  .get(getAllHotel)
  .post(protected, restrictedToAdmin, createHotel);
router
  .route("/:id")
  .get(getSingleHotel)
  .patch(protected, restrictedToAdmin, updateHotel)
  .delete(protected, restrictedToAdmin, deleteHotel);
module.exports = router;
