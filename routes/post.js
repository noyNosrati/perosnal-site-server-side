const express = require("express")
const { postsModel } = require("../model")

const router = express.Router()

router.get("/", async (req, res) => {
    console.log("TRYING TO FETCH DATA...")
    let data = await postsModel.find({})
    console.log("DATA FECTHED!")
    res.json({ data })

})

router.post("/", async (req, res) => {
    let post = new postsModel(req.body)
    await post.save()
    res.json(post)
    console.log("POSTED")
})

module.exports = router