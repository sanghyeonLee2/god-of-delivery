const express = require('express');
const router = express.Router();
const {postSignUp, postSignIn, getRefreshReissued} = require("../controllers/auth.controller");
const {middleVerifyToken} = require("../middlewares/auth.middleware");

router.post('/sign-up', postSignUp);
// router.get('/sign-up/check-id/:id', getCheckId)
router.post('/sign-in', postSignIn);
router.post('/sign-in/reissue', getRefreshReissued);

module.exports = router;