var express = require('express');
var router = express.Router();

import logger from '../utils/Logger'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello from GET:/users/');
  logger.info("observed requet to GET:/users")
});

export default router
