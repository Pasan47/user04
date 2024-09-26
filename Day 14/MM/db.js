const mongoose = require("mongoose");

const connectToDatabase = async() => {
    try {
        await mongoose.connect(
            "mongodb+srv://user1:12345s@cluster0.4421c.mongodb.net/",
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
            }
        ) ;

        console.log("Connected succesfully");
    } catch(error){
        console.log("Error Handling", error);
        process.exit(1);
    }
}

module.exports = connectToDatabase;