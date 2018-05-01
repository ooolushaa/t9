var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
  const nums = req.query.nums;
  console.log(nums);

  const response = {
    ok: true,
    suggestions: [
      'hello',
      'world',
      'fuzz',
      'buzz'
    ],
    error: null,
  }

  res.send(response)
})

module.exports = router