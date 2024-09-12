const express = require("express");
const connectToDatabase = require("./db")
const {mongoose} = require("mongoose")

const router = express.Router()

const userSchema = new mongoose.Schema({
    name:String,
    age: Number,
    gender: String,
});

const User = mongoose.model("user",userSchema);

//pass data

router.post("/addUser",async(req,res)=>{
    try{
        console.log("User Name added");
        await connectToDatabase();
        const newUser = new User(req.body);
        await newUser.save(); // save user in DB

        res.send({newUser}) //res.json: to end the process and show the response
        return newUser;
    }catch (error){
        console.log("Error");
        throw error;
    }
})

//* retrieve data

router.get("/getAllUser",async(req,res)=>{
    try{
        await connectToDatabase();
        User.find().then((users)=>{
            res.json(users);
        })
    }
    catch(error){
        res.status(500).json({error:"Failed to retrieve attributes"})
    }
})





module.exports = router