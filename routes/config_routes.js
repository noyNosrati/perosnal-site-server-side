const postsR = require("./post")

exports.routesInit = (app) => {
    app.use("/posts", postsR);

}