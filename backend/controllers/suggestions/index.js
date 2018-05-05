const T9 = require('../../services/t9');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  let ok = true;
  let suggestions = [];
  let error = null;

  const numbers = req.query.numbers;

  try {
    suggestions = T9.processNumbers(numbers);
  } catch (err) {
    ok = false;
    error = "Not valid number string";
  }

  const response = {
    ok,
    suggestions,
    error,
  }

  res.send(response);
})

module.exports = router;