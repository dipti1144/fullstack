const { movie } = require("../models/movie.model");

const postMovie=async(req,res)=>{
    try {
        const payload=req.body;
        const newMovie=await movie.create(payload);
        res.status(200).send(newMovie)
    } catch (error) {
        res.status(404).send(error.massage)
    }
}

const getMovie=async(req,res)=>{
    try {
        let query={};
        const {min=1, max=5 , genre ,year_of_release }=req.query
        if(genre){
            query.genre=genre
        }
        if(year_of_release){
            query.year_of_release=year_of_release
        }
        query.rating={$gte:min,$lte:max};
        // console.log(query)
       const list=await movie.find(query);
       res.status(200).send(list) 
    } catch (error) {
        res.status(404).send(error.massage)
    }
}

const getSingleMovie=async(req,res)=>{
    try {
        const {id}=req.params;
        const film= await movie.findById(id)
        res.status(200).send(film)
    } catch (error) {
        res.status(404).send(error.massage)
    }

}

const updateMovie=async(req,res)=>{
    try {
        const payload=req.body;
        const {id}=req.params;
        const update=await movie.findByIdAndUpdate(id,payload);
        console.log(update)
        res.status(200).send("movie is updated")
    } catch (error) {
        res.status(404).send(error.massage)
    }
}

const deleteMovie=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleted=await movie.findByIdAndDelete(id);
        res.status(200).send(deleted)
    } catch (error) {
        res.status(404).send(error.massage)
    }
}

module.exports={
    postMovie,
    getMovie,
    getSingleMovie,
    updateMovie,
    deleteMovie
}