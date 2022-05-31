const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required
    }

},
    {timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema);

