var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello from GET:/users/');
  logger.info("observed requet to GET:/users")
});

export default router
