const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("../Controllers/authController");
const {
  registrationValidation,
  validation,
  loginValudation,
} = require("../midelware/validation");
const isAuth = require("../midelware/isAuth");
const uploads = require("../midelware/uploads");

router.post(
  "/register",
  uploads.single("image"),
  registrationValidation,
  validation,
  registerController
);
router.post("/login",uploads.single('image') ,loginValudation, validation, loginController);
router.get("/current", isAuth, (request, response) => {
  response.send({ user: request.user });
});

module.exports = router;
