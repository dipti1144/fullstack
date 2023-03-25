const express = require("express");
const { connection } = require("./config/db");
const { movieRouter } = require("./routes/movie.route");

require("dotenv").config({path:"server/.env"});

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("movie web app");
});

app.use("/movie", movieRouter);

app.listen(port, async() => {
  try {
    await connection;
    console.log(`port is running at ${port}`);
    console.log("connection") 
  } catch (error) {
    console.log(error.message);
  }
});
