const express = require("express");
const { connection } = require("./config/db");
const { movieRouter } = require("./routes/movie.route");

require("dotenv").config({path:"server/.env"});

const app = express();
const port = process.env.PORT;
console.log(port)

app.use(express.json());

app.get("/", (req, res) => {
  res.send("movie web app");
});

app.use("/movie", movieRouter);

connection()

app.listen(port,() => {
  console.log(`Server is working on http://localhost:${port}`);
});
