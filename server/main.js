// server/index.js

const express = require("express");

const PORT = process.env.PORT || 8000;

//const v1Router = require("./v1/routes");

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} ccccccccc`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server inside src!" });
})

//app.use("/api/v1", v1Router);

