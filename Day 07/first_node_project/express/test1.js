

const express = require("express");
const router = express.Router();

router.get("/test2",(req,res) =>{
    res.send({image:"OUTPUT"});
})

module.exports = router;