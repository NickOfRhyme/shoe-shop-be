const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Golden Shoe API is live!");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
