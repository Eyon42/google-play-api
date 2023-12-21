const app = require("express")();
const router = require("../lib");

app.use("/api/", router);

app.get("/", function (req, res) {
  res.status(200);
  res.send("OK");
});

module.exports = app;
