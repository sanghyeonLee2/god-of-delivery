const express = require('express');

const router = express.Router();

const {getMenuDetail} = require('../controllers/menu.controller');

router.get('/:menuId', getMenuDetail)

module.exports = router;