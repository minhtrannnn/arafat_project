const express = require("express");
const { connection } = require("./configs/db");
require("dotenv").config();
const cors = require("cors");

const adminRouter = require("./routes/Admins.Route");
const medRouter = require("./routes/Meds.Route");
const staffRouter = require("./routes/Staffs.Route");
const hospitalRouter = require("./routes/Hospitals.Route");
const patientRouter = require("./routes/Patients.Route");
const reportRouter = require("./routes/Reports.Route");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("EXTREMELY CUTE");
});

app.use("/admin", adminRouter);
app.use("/meds", medRouter);
app.use("/staffs", staffRouter);
app.use("/hospitals", hospitalRouter);
app.use("/patients", patientRouter);
app.use("/reports", reportRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Unable to connect to DB");
    console.log(error);
  }
  console.log(`Listening at port ${process.env.PORT}`);
});
