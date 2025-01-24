const express = require('express');

const router = express.Router();
const {getStores, postCreateStore} = require('../controllers/store.controller')

router.get('/:city/:district/:category', getStores);
router.post('/create', postCreateStore);

module.exports = router;