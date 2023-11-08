// getting-started.js
const mongoose = require('mongoose');
const { config } = require("../privateData")

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect("mongodb+srv://yan241999:yan241999@cluster0.jktqllf.mongodb.net/mySite")  //removed /PostsDatabase
    }
    catch (err) {
        console.log("ERROR")
    }
    console.log(config.DBUSERNAME, config.DBPASSWORD)
    console.log("connected")

}


