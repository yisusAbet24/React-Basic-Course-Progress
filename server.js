const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const response = {
    message: `Hello ${req.body.name}`,
  };
  res.send(response);
});

app.listen(4000, () => {
  console.log("Example app listening on port 3000!");
});
