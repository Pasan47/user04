const { mongoose, Schema } = require("mongoose");

const tutorial = mongoose.model(
    "tutorial",
    new Schema({
        name:String,
        author:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "author",
            },
        ]
    })
)
module.exports = tutorial;