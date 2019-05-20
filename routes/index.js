var express = require('express');
var router = express.Router();

import logger from '../classes/Logger'

/* GET home page. */
router.get('/', function(req, res, next) {

  res.send('hello from GET:/');
  logger.info("observed requet to GET:/")
});

export default router
