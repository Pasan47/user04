const mongoose = require("mongoose");

const connectToDatabase = async() => {
    try {
        await mongoose.connect(
            "mongodb+srv://user1:12345s@cluster0.4421c.mongodb.net/",
            {
                //serverSelectionTimeoutMS: 50000, // Increase timeout to 50 seconds
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