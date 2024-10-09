const express = require("express");
const { adminauth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminauth);

app.get("/admin/allrequest", (req, res) => {
  res.send("Route Handler 1");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
