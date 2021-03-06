const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName : {
        type: 'string',
        required: true,
    },
    lastName : {
        type: 'string',
        required: true,
    },
    email : {
        type: 'string',
        required: true,
    },
    password : {
        type: 'string',
        required: true,
    },
    role : {
         type:'string',
         required : true
    }
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id : this._id}, process.env.JWTPRIVATE, {expiresIn: "7d"})
    return token;
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = joi.object({
        firstName : joi.string().required().label('First Name'),
        lastName : joi.string().required().label('Last Name'),
        email : joi.string().email().required().label('Email'),
        password : passwordComplexity().required().label('Password'),
        role : joi.string()
    });
    return schema.validate(data);
}

module.exports = {
    User,
    validate,
}