var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var logger = require('morgan');

var Patient = require('../models/patient');


// app.use(express.static('/'));
// app.use(express.static('dist'));
// app.use('/*', express.static(path.resolve('dist')));

/* Test route */
router.get('/', function (req, res) {
  res.render('/dist/index.html');
});

router.get('/api/me', function (req, res) {
  res.json({userName: 'Brajendra'});
});

router.post('/api/patient/create', function (req, res, next) {
  console.log('req.body', req.body);
  var reqBody = req.body;
  var patient = new Patient({
    firstName: reqBody.firstName,
    lastName: reqBody.lastName,
    dob: reqBody.dob,
    maritalStatus: reqBody.maritalStatus,
    address: reqBody.address,
    mobileNum: reqBody.mobileNum
  });
  patient.save();
  res.json({created: true});
});

router.get('/api/patient/getAll', function (req, res) {
  Patient.find({firstName: /braj/i}, function(err, doc) {
    if (err) {
      return res.send('Error!');
    }
    res.json(doc);
  });
});



module.exports = router;
