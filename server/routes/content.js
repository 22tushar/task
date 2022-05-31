import { User } from "../models/user";
const router = require("express").Router();


//Admin and super admin
router.post("/save",async (req,res)=>{
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err);
    }
});


//users admin super (all)
router.get("/view", async (req, res)=>{
    try {
        
        const post = await Post.find({status:'verified'});
        res.josn({posts:post});
        
    } catch (err) {
        res.status(500).json(err);
    }
});

//super admin
router.get('/unverified' , async(req,res)=>{
    try{
        const post = await Post.find({status:unverified});
        res.json({posts:post});
    }
    catch{
        res.status(500).send('error');
    }
})
router.post("/verify:id", async (req, res)=>{
    try {
        if(User.role === 'super_admin'){

            try {
                     await Post.findByIdAndUpdate(req.params.id,{
                     status:"verified"
                },{new:true});
                res.status(200).json(updatedStatus);
            } catch (err) {
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You have no permission!");
        }
    } 
    catch (err) {
        res.status(500).json(err);
    }
});