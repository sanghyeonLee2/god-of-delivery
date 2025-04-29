const express = require("express");
const router = express.Router();
const {
  postSignUp,
  postSignIn,
  getRefreshReissued,
} = require("../controllers/auth.controller");

router.post("/sign-up", postSignUp);
router.post("/sign-in", postSignIn);
router.post("/reissue", getRefreshReissued);

module.exports = router;
