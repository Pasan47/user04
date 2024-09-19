const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render( "index",{
        title: "Hey",
        message: "Hello",
        messageDiscription : "I am from Sri Lanka"
    });
});

module.exports = router;