const express = require("express")

const tute = require("./tutorial")
const auth= require("./author")
const app = express();

app.use(express.json());

app.use("/api/tute",tute)

app.use("/api/auth",auth)




const port = 5000


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})