const router = require('express').Router();
const {User} = require('../module/user');
const bcrypt = require('bcrypt');
const joi = require('joi');

router.post('/', async (req, res) => {
    try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: "Inavlid Email or Password"});
        const user = await User.findOne({email: req.body.email});
        if(!user)
        return res.status(400).send({message: "Inavlid Email or Password"});
        const validPassword = await bcrypt.compare( req.body.password, user.password);
        if(!validPassword)
            return res.status(400).send({message: "Inavlid Email or Password"});
        console.log(req.body);
        const token = user.generateAuthToken();
        res.status(200).send({data : token, message : "Logged in Successfully"});
    } catch (error) {
        res.status(500).send({message : "Internal server error"});
    }
})

const validate = (data) => {
    const schema = joi.object({
        email : joi.string().email(). required().label("Email"),
        password : joi.string().required().label("Password")
    })
    return schema.validate(data);
}

module.exports = router