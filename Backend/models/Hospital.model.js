const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({
  staffNumbers: {
    type: Number,
  },

  patientNumbers: {
    type: Number,
  },

  roomsNumbers: {
    type: Number,
  },

  bedNumbers: {
    type: Number,
  },

  reportsNumbers: {
    type: Number,
  },
});

const HospitalModel = mongoose.model("hospital", hospitalSchema);

module.exports = { HospitalModel };
