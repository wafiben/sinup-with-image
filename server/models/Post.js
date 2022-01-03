const mongoose=require('mongoose');
/* const MovieSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
module.exports=mongoose.model('Post',postSchema) */
const movieSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    addedId:{
        type:String
    }
})
module.exports=mongoose.model('Movie',movieSchema)