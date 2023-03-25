const { Schema  , model } = require("mongoose");

const movieSchema=new Schema({
    movie_name: {type:String , require:true},
    genre:{type:String , require:true},
    director:{type:String , require:true},
    rating:{type:Number , require:true},
    year_of_release:{type:Number , require:true}
})

const movie=model("movie",movieSchema);

module.exports={movie}