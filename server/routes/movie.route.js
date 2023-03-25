const express=require("express");
const { postMovie, getMovie, getSingleMovie, updateMovie, deleteMovie } = require("../controllers/movie.controller");


const movieRouter=express.Router();

movieRouter.post("/", postMovie);
movieRouter.get("/", getMovie );
movieRouter.get("/:id",getSingleMovie);
movieRouter.patch("/:id",updateMovie);
movieRouter.delete("/:id",deleteMovie)

module.exports={movieRouter}