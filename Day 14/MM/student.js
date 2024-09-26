const express = require("express");
const connectToDatabase = require("./db")
const {mongoose} = require("mongoose")
const jwt =require("jsonwebtoken")

require("dotenv").config();


const router = express.Router()




//!POSTMAN

//*pass data
router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = {
        name: username,
        password: password
    }

    const accessToken = jwt.sign(user, process.env.TOKEN_KEY, {expiresIn: "10s"});
    const refreshToken = jwt.sign(user, process.env.RE_TOKEN_KEY, {expiresIn: "24h"});



    console.log(accessToken);

    console.log(refreshToken);

    res.cookie("accessToken", accessToken, {httpOnly:true});
    res.cookie("refreshToken", refreshToken, {httpOnly:true});

    res.json({ accessToken, refreshToken }); // Respond with tokens


});



// Create an access token through refresh token when access token is exprired

router.post("/token", (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    console.log(refreshToken);

    if (refreshToken == null) res.sendStatus(401);

    jwt.verify(refreshToken, process.env.RE_TOKEN_KEY, (err, user) => {
        if(err) res.sendStatus(403);

        const accessToken = jwt.sign({ name: user.name }, process.env.TOKEN_KEY, {
            expiresIn: "10s"
        });

        res.json({ accessToken }); // Respond with new access token
    });
});


module.exports = router;