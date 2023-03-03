const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

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

async function start(port, ip, dbLink) {
  try {
    await mongoose.connect(dbLink);
    app.listen(port, ip, () => {
      console.log("server started on " + ip + ":" + port);
    });
  } catch (err) {
    console.log(err);
  }
}

start(PORT, IP, DB_LINK);
