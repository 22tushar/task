const {User} =  require("../models/user");
const router = require("express").Router();
const {Postmodel} = require("../models/content")


//Admin and super admin
router.post("/save",async (req,res)=>{
    const {title , description, author, status} = req.body
    console.log(req.body)
    const newPost =  await Postmodel.create({title , description, author, status});
    // await newPost.save()
    console.log(newPost)
    try {
        // const savePost = await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


//users admin super (all)
router.get("/view", async (req, res)=>{
    try {
        
        const post = await Postmodel.find({status:"unverified"});
        res.json({posts:post});
        
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//super admin
router.get('/unverified' , async(req,res)=>{
    try{
        const post = await Postmodel.find({status:"unverified"});
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

module.exports = router