const express = require("express");
const app = express();
const db = require("../config/db");
db;
app.use(express.json());

const authRoute = require("../routes/authRoute");
const countryRouter = require("../routes/countryRoute");
const regionRoute = require("../routes/regionRoute");
const districtRoute = require("../routes/districtRoute");
const schoolRoute = require("../routes/schoolRoute");
const groupRoute = require("../routes/groupRoute");

const studentRoute = require("../routes/studentRoute");
app.use("/users", authRoute);
app.use("/api/v1/country", countryRouter);
app.use("/api/v1/region", regionRoute);
app.use("/api/v1/district", districtRoute);
app.use("/api/v1/school", schoolRoute);
app.use("/api/v1/group", groupRoute);
app.use("/api/v1/students", studentRoute);
module.exports = app;
