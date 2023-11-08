const express = require("express")
const { PostModel } = require("../model")

const router = express.Router()

router.get("/", async (req, res) => {
    console.log("TRYING TO FETCH DATA...")
    let data = await PostModel.find({})
    console.log("DATA FECTHED!")
    res.json(data)
})

router.post("/", async (req, res) => {
    let post = new PostModel(req.body)
    await post.save()
    res.json(post)
    console.log("POSTED")
})

module.exports = router