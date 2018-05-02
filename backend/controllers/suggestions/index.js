const T9 = require('../../services/t9');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  let ok = true;
  let suggestions = [];
  let error = null;

  const numbers = req.query.numbers;

  if (!numbers) {
    ok = false;
    error = "Numbers can not be empty";
  }

  if (ok && isNaN(numbers)) {
    ok = false;
    error = "Not a number";
  }

  if(ok && numbers.indexOf(1) > -1) {
    ok = false;
    error = "Number string should not contains 1";
  }

  if (ok) {
    suggestions = T9.processNumbers(numbers);
  }

  const response = {
    ok,
    suggestions,
    error,
  }

  res.send(response);
})

module.exports = router;