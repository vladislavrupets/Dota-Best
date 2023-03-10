const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");

const writeLastParsedMatch = require("./services/writeLastParsedMatch");

const PORT = process.env.PORT || 8000;
const IP = process.env.IP || "localhost";
const DB_LINK = process.env.DB_LINK;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/matches", require("./routes/matchesRoutes"));

async function start(port, ip, dbLink) {
  try {
    await mongoose.connect(dbLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, ip, () => {
      console.log("server started on " + ip + ":" + port);
    });
  } catch (err) {
    console.log(err);
  }
}

start(PORT, IP, DB_LINK);
