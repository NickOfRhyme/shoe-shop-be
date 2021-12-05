const express = require("express");
const apiRouter = require("./routes/routes");
const app = express();
const cors = require("cors");
const PORT = 3030;

app.use(express.json());
app.use(cors());

app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
