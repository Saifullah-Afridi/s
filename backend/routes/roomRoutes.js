const express = require("express");
const {
  getAllRoom,
  createRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomControllers");
const router = express.Router();

router.route("/").get(getAllRoom);
router.route("/:hotelId").post(createRoom);
router.route("/:id").get(getSingleRoom).patch(updateRoom).delete(deleteRoom);

module.exports = router;
