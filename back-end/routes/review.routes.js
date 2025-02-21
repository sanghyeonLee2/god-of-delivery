const express = require('express');
const {verifyToken} = require("../middlewares/auth.middleware");

const router = express.Router();
const {} = require('../controllers/review.controller')

router.post('/create',[verifyToken], )

module.exports = router;