const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

app.set("view engine", "ejs");
app.use("/static", express.static("public"));

app.get("/tryit", (req, res) => {
  res.render("tryIt");
});
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`front-end project listening on port ${PORT}!`);
});