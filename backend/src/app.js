const express = require("express");
const cors = require("cors");
const path = require("path");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/items", itemRoutes);
app.use("uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("wallet freeze mode api running");
});

module.exports = app;
