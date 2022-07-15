const express = require("express");
const app = express();
const db = require("../config/db");
db;
app.use(express.json());
const countryRouter = require("../routes/countryRoute");
const districtRoute = require("../routes/districtRoute");
const schoolRoute = require("../routes/schoolRoute");
const groupRoute = require("../routes/groupRoute");

const studentRoute = require("../routes/studentRoute");

app.use("/api/v1/country", countryRouter);
app.use("/api/v1/district", districtRoute);
app.use("api/v1/schoolRoute", schoolRoute);
app.use("api/vs1/groupRoute", groupRoute);
app.use("/api/v1/students", studentRoute);
module.exports = app;
