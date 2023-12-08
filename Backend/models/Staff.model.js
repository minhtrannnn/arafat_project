const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
  userType: {
    type: String,
    default: "staff",
  },

  staffID: {
    type: Number,
    required: true,
  },

  staffName: {
    type: String,
  },

  staffRole: {
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

const StaffModel = mongoose.model("staffs", staffSchema);

module.exports = { StaffModel };
