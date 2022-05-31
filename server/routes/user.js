const router = require('express').Router();
const {User, validate} = require('../module/user');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
    try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message : error.details[0].message});
        const user = await User.findOne({email: req.body.email});
        if(user)
            return res.status(409).send({message : "User with given email Already exist"});
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        console.log(req.body)
        const newUser = await User.create({...req.body, password: hashPassword});
        res.status(201).send({message : "User created successfully"});
    } catch (error) {
        res.status(500).send({message : "Internal server error"});
    }
});

module.exports = router