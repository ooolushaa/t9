var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
  const nums = req.query.nums;
  console.log(nums);
  res.send('Hello World!')
})

module.exports = router