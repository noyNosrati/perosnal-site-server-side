const express = require("express")
const http = require("http")
const app = express()
const path = require("path")
const cors = require("cors")

const { routesInit } = require("./routes/config_routes")

require("./database/mongoConnect")

let port = process.env.PORT || 3001


app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(cors()) // giving permission of access to every domain
routesInit(app)
const server = http.createServer(app);
server.listen(port)

