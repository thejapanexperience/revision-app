const express = require('express');
const router = express.Router();

router.use('/generics', require('./generics'));

module.exports = router;
