var express = require('express')
  , router = express.Router()

router.use('/suggestions', require('./suggestions'))

module.exports = router