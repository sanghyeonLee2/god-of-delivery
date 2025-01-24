const express = require('express');

const router = express.Router();
const {getCheckId, postSignUp, postSignIn , getRefreshReissued} = require('../controllers/user.controller');



router.post('/sign-up', postSignUp);
router.get('/sign-up/check-id/:id', getCheckId)
router.post('/sign-in', postSignIn);
router.post('/sign-in/reissue', getRefreshReissued);

module.exports = router;