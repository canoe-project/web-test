var express = require("express");
var app = express();
var indexRouter = require("./routes/index.js");
app.use(express.static("./assets/fileData/Notice"));

app.use("/", indexRouter);

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
