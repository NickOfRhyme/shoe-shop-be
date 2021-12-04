const express = require("express");
const apiRouter = require("./routes/routes");
const app = express();
const PORT = 3000;

app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
