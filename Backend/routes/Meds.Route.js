const express = require("express");
const { MedModel } = require("../models/Med.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const meds = await ReportModel.find(query);
    res.status(200).send(meds);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.patch("/:medId", async (req, res) => {
  const id = req.params.medId;
  const payload = req.body;
  try {
    const med = await MedModel.findByIdAndUpdate({ _id: id }, payload);
    if (!med) {
      return res.status(404).send({ msg: `med with id ${id} not found` });
    }
    return res.status(200).send(`med with id ${id} updated`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});


router.delete("/:medId", async (req, res) => {
  const id = req.params.medId;
  try {
    const med = await MedModel.findByIdAndDelete({ _id: id });
    if (!med) {
      res.status(404).send({ msg: `med with id ${id} not found` });
    }
    res.status(200).send(`med with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Delete." });
  }
});

module.exports = router;
