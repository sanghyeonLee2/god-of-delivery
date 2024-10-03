const express = require('express');

const router = express.Router();
const {getStores, postCreateStore} = require('../controllers/storeController')

router.get('/:city/:district/:category', getStores);
router.post('/create', postCreateStore);

module.exports = router;