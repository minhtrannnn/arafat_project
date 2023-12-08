const mongoose = require("mongoose");

const medSchema = mongoose.Schema({
  bedNumber: {
    type: Number,
    required: true,
  },

  roomNumber: {
    type: Number,
    required: true,
  },

  occupied: {
    type: String,
  },

  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },

  medication: {
    type:String,
    required: true,
  },

  quantity: {
    type:Number,
    required: true,
  },

  price: {
    type:Number,
    required: true,
  },

  status: {
    type:String,
    required: true,
  },

  provider: {
    type:String,
    required: true,
  },

  date: {
    type:String,
    required: true,
  },

  location: {
    type:String,
    required: true,
  },
});

const MedModel = mongoose.model("med", medSchema);

module.exports = { MedModel };
