const express = require('express');
const router = express.Router();

router.get('/b1', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("Hello");
  res.json({a:1});
  
});





module.exports = router;
