const express = require("express");
const { AdminModel } = require("../models/Admin.model");
const { BedModel } = require("../models/Bed.model");
const { StaffModel } = require("../models/Staff.model");
const { PatientModel } = require("../models/Patient.model");
const { ReportModel } = require("../models/Report.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let admins = await AdminModel.find();
    let patients = await PatientModel.find();
    let beds = await BedModel.find();
    let reports = await ReportModel.find();
    let staffs = await StaffModel.find();
    let data = {
      admin: admins.length,
      patient: patients.length,
      bed: beds.length,
      report: reports.length,
      staff: staffs.length,
    };
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;
