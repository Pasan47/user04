const { mongoose, Schema } = require("mongoose");

const author = mongoose.model(
    "author",
    new Schema({
        name:String,
        tutorial:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "tutorial",
            },
        ]
    })
)
module.exports = author;