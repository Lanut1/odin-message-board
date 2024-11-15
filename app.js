const express = require("express");
const app = express();
const path = require("node:path");
const router = require("./routes/index");

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`My app is running on port ${PORT}...`);
})