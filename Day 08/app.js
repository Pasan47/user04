const express = require("express")

const post = require("./post")
const order = require("./order")
const app = express();

app.use(express.json());
//* For post
app.use("/api/post",post)


//* For Order

app.use("/api/order",order)

const port = 5000


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})