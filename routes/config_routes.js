const postsR = require("./posts")

exports.routesInit = (app) => {
    app.use("/posts", postsR);


    app.use("/*", (req, res) => {
        res.status(404).json({ msg: "Endpoint/page not found, 404" })
    })


}

