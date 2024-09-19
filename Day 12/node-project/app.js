

const express = require("express")
const pug = require("pug")
const student = require("./student")

const app = express()


app.set("view engine","pug")
app.set("views","./views");

app.use("/student", student)

const port = 5000


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})