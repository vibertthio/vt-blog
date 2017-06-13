const express = require('express');
const index = require('./index');
const api = require('./routes/api');

const router = express.Router();

router.use('/', index);
router.use('/api', api);

module.exports = router;
