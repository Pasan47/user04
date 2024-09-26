const express = require("express");
const connectToDatabase = require("./db")
const {mongoose} = require("mongoose")

const router = express.Router()
const app = express();

const postSchema = new mongoose.Schema({
    posttitle: String,
    postcontent: String,
    url: String,
});

const Post = mongoose.model("post",postSchema);

//* use direct async funtion 

// async function savePost() {
//     await connectToDatabase();
//     const newPost = new Post({
//         posttitle : "election",
//         postcontent: "It is on 21st",
//         url: "sdsds"
//     });

//     await newPost.save();
  
// }

// savePost();


//!POSTMAN

//*pass data
router.post("/addPost",async(req,res)=>
{
    try{
        console.log("Today's work");
        await connectToDatabase();
        const newPost = new Post(req.body);
        await newPost.save();
        res.send({newPost});
        return newPost;
    }catch (error){
        console.log(error);
        throw error;
    }
})

//* retrieve data

router.get("/getAllPost",async(req,res)=>{
    try{
        await connectToDatabase();
        Post.find().then((posts)=>{
            res.json(posts);
        })
    }
    catch(error){
        res.status(500).json({error:"Failed to retrieve attributes"})
    }
})

//* Retrive data by id

router.get("/getPostById/:id",async(req,res)=>{
    try{
        await connectToDatabase();
        console.log(req.params.id);
        Post.find({_id:req.params.id}).then((posts)=>{
            res.json(posts);
        })
    }
    catch(error){
        res.status(500).json({error:"Failed to retrieve your desired value"})
    }
})


//* update data by id

router.put("/editPost/:id",async(req,res)=>{
    try{
        await connectToDatabase();
        const updatedResource = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if(!updatedResource){
            return res.status(404).json({error: "Resource not found"})
        }
        res.json(updatedResource)
    }
    catch(error){
        res.status(400).json({error:"Failed to update the value"})
    }
})

//* Delete day by ID
router.delete("/deletePost/:id",async(req,res)=>{
    try{
        console.log(req.params.id);
        const deletedResource = await Post.findByIdAndDelete(req.params.id);
        if(!deletedResource){
            return res.status(404).json({error: "Resource not found"})
        }
        res.json({message:"Resouce deleted successfully"});
    }
    catch(error){
        res.status(500).json({error:"Failed to delete the value"})
    }
})




module.exports = router;