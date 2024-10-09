const express = require("express");

const app = express();

app.post("/user", (req, res) => {
  res.send({ firstnmae: "yash", lastname: "tyagi" });
});

app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
