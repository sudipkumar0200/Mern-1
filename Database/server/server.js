const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
const routes = require("./Routes/todoRoutes");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected.....");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api", routes);

app.listen(PORT, () => console.log(`Lestining on port ${PORT}..... `));
