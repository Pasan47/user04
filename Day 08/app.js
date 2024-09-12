const express = require("express")
const cors = require("cors")

const post = require("./post")
const order = require("./order")
const user = require("./user")

const app = express();
app.use(cors());

app.use(express.json());
//* For post
app.use("/api/post",post)


//* For Order

app.use("/api/order",order)

//*For user
app.use("/api/user",user)

const port = 5000


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})