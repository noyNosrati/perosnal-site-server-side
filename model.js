const mongoose = require("mongoose")

const PostsSchema = new mongoose.Schema(
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


const postsModel = mongoose.model("posts", PostsSchema)

exports.postsModel = postsModel
