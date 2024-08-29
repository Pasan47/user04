const express = require("express")
const test1 = require("./test1")

const app = express();


app.use(express.json())
console.log("world");

app.use("/api/test1",test1)


app.listen(5000, ()=>{
    console.log("Server listneing on port 5000");
})


//! POstman localhost:5000/api/test1/test2

/*
{
    "image": "OUTPUT"
}
*/
