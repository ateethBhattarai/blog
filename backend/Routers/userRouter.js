const express = require("express");
const {
  register,
  login,
  current,
  logout,
  getAllUsers,
} = require("../Controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current", current);
router.get("/all-user", getAllUsers);

module.exports = router;
