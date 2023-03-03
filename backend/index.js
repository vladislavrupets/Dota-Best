const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const IP = process.env.IP || "localhost";

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/user", authRoutes);

app.listen(PORT, IP, () => {
  console.log("server started on " + IP + ":" + PORT);
});
