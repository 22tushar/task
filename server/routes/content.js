// /save --> if admin further verified

// /verify --> content id;
// /review --> 
// /view -->user
import { User } from "../models/user";
const router = require("express").Router();

router.post("/save",async (req,res)=>{
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (err) {
        res.status(500).json(err);
    }
});



router.get("/", async (req, res)=>{
    const username = req.query.user;
    try {
        let posts;
        if(username){
            posts = await Post.find({username});
        } else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/verify:id", async (req, res)=>{
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

module.exports = router;