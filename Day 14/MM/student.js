// This file is for authentication --> api/auth

//jwt.io

const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config()

const router = express.Router();

router.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = {
        name: username,
        password: password
    }

    const accessToken = jwt.sign(user, process.env.TOKEN_KEY, {expiresIn: "1000s"});
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

// Remove refresh token from the http only cookie when logout

router.delete("/logout", (req, res) => {

    res.clearCookie("accessToken", { httpOnly: true });
    res.clearCookie("refreshToken", { httpOnly: true });

    res.json({  "message" : "deleted successfully" }); // Respond with new access token
})

module.exports = router;