const express = require('express');

const router = express.Router();
const {getStores} = require('../controllers/storeController')

router.get('/:city/:district/:category', getStores);

module.exports = router;