const express = require("express")
const cors = require("cors")

const post = require("./post")
const order = require("./order")
const user = require("./user")
const auth = require("./student")
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors());

app.use(express.json());
//* For post
app.use("/api/post",post)

app.use(cookieParser())
//* For Order

app.use("/api/order",order)

//*For user
app.use("/api/user",user)

//for authentication

app.use("/api/student",auth)
const port = 5000


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})