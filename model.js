const mongoose = require("mongoose")

let schema = new mongoose.Schema(
    {
        quote: String,
        font: String,
        fontColor: String,
        xPosition: Number,
        yPosition: Number,
        rotation: Number,
        firstName: String,
        lastName: String,
        ip: String,
        dateCreated: {
            type: Date,
            default: Date.now
        }
    }
)


exports.PostModel = mongoose.model("posts", schema)

