const express = require("express");
const { StaffModel } = require("../models/Staff.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const staffs = await StaffModel.find();
    res.status(200).send(staffs);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    const staff = await StaffModel.findOne({ email });
    if (staff) {
      return res.send({
        message: "Staff already exists",
      });
    }
    let value = new StaffModel(req.body);
    await value.save();
    const data = await StaffModel.findOne({ email });
    return res.send({ data, message: "Registered" });
  } catch (error) {
    res.send({ message: "error" });
  }
});

router.post("/login", async (req, res) => {
  const { staffID, password } = req.body;
  try {
    const staff = await StaffModel.findOne({ staffID, password });

    if (staff) {
      const token = jwt.sign({ foo: "bar" }, process.env.key, {
        expiresIn: "24h",
      });
      res.send({ message: "Successful", user: staff, token: token });
    } else {
      res.send({ message: "Wrong credentials" });
    }
  } catch (error) {
    console.log({ message: "Error" });
    console.log(error);
  }
});

router.patch("/:staffId", async (req, res) => {
  const id = req.params.staffId;
  const payload = req.body;
  try {
    await StaffModel.findByIdAndUpdate({ _id: id }, payload);
    const staff = await StaffModel.findById(id);
    if (!staff) {
      return res
        .status(404)
        .send({ message: `Staff with id ${id} not found` });
    }
    res.status(200).send({ message: `Staff Updated`, user: staff });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Update." });
  }
});

router.delete("/:staffId", async (req, res) => {
  const id = req.params.staffId;
  try {
    const staff = await StaffModel.findByIdAndDelete({ _id: id });
    if (!staff) {
      res.status(404).send({ msg: `Staff with id ${id} not found` });
    }
    res.status(200).send(`Staff with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Delete." });
  }
});

module.exports = router;
