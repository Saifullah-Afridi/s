const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const {
  protected,
  restrictedToAdmin,
} = require("../controllers/authControllers");

// ^=*********************************Admin Controlling User********************** for dashboard
router.get("/", protected, restrictedToAdmin, getAllUser);
router.post("/", protected, restrictedToAdmin, createUser);
router.get("/:id", getSingleUser);
router.patch(":id", protected, restrictedToAdmin, updateUser);
router.delete(":id", protected, restrictedToAdmin, deleteUser);

module.exports = router;
