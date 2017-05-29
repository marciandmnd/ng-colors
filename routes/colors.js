var express = require('express');
var router = express.Router();

var Color = require('../models/color');

router.get('/', function(req, res, next) {
  Color.find(function(err, colors){
    if(err) {
       return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: colors
      });
  });
});

module.exports = router;