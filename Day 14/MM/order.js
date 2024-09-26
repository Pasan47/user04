const express = require("express")
const connectToDatabase = require("./db")
const {mongoose} = require("mongoose")

const router = express.Router()

const orderSchema = new mongoose.Schema({
    orderType: {type:String, required:true},
    amount: Number,
    price: Number
});

const Order = mongoose.model("order",orderSchema);

//* add order

router.post("/addOrder",async(req,res)=>
{
    try{
        await connectToDatabase();
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.send({newOrder});
        return newOrder;

    } catch (error){
        console.log(error);
        throw error;
    }
})

module.exports = router;