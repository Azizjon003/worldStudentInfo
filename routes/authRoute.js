const express = require("express");
const router = express.Router();

const auth = require("../controller/authController");

router.post("/signup", auth.signup);
router.post("/login", auth.login);

module.exports = router;
// Compare this snippet from middleware/app.js:
