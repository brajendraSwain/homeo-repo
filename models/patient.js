var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  dob: { type: Date },
  maritalStatus: { type: String },
  address: { type: String },
  mobileNum: { type: Number }
});

module.exports = mongoose.model('Patient', schema);
