const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  userType: {
    type: String,
    default: "doctor",
  },

  docID: {
    type: Number,
    required: true,
  },

  docName: {
    type: String,
  },

  role: {
    type: String,
  },

  mobile: {
    type: Number,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },

  gender: {
    type: String,
  },

  bloodGroup: {
    type: String,
  },

  DOB: {
    type: Date,
  },

  address: {
    type: String,
  },

  education: {
    type: String,
  },

  department: {
    type: String,
  },

  image: {
    type: String,
    default:
      "",
  },

  details: {
    type: String,
  },
});

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = { DoctorModel };
