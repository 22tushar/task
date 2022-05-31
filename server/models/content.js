// const mongoose = require("mongoose")

// const PostSchema = new mongoose.Schema({
//     title: {
//       type: String,
//       default: "",
//     },
//     description: {
//       type: String,
//       default: "",
//     },
//     // price: {
//     //   type: Number,
//     //   default: "",
//     // },
//     status: { type: String, default: "" },
//     author: { type: String, default: "" },
//     // date: { type: String },
// });

// const Postmodel = mongoose.model("post", PostSchema);
// module.exports = Postmodel;


// var mongoose = require('mongoose');
// var schema = mongoose.Schema({
//     path : {type:String , required:true},
//     title: {type:String , required: true}
// })
// module.export = mongoose.model('game', schema);

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    title: {
        type: 'string',
        // required: true,
    },
    description : {
        type: 'string',
        // required: true,
    },
    status : {
        type: 'string',
        // required: true,
    },
    author : {
        type: 'string',
        // required: true,
    },
    // role : {
    //      type:'string',
    //      required : true
    // }
});

// userSchema.methods.generateAuthToken = () => {
//     const token = jwt.sign({_id : this._id}, process.env.JWTPRIVATE, {expiresIn: "7d"})
//     return token;
// }

const Postmodel = mongoose.model("post", userSchema);

// const validate = (data) => {
//     const schema = joi.object({
//         firstName : joi.string().required().label('First Name'),
//         lastName : joi.string().required().label('Last Name'),
//         email : joi.string().email().required().label('Email'),
//         password : passwordComplexity().required().label('Password'),
//         role : joi.string()
//     });
//     return schema.validate(data);
// }

module.exports = {
    Postmodel,
}