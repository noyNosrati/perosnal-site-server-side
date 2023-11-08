// getting-started.js
const mongoose = require('mongoose');
const { config } = require("../privateData")

main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb+srv://yan241999:yan241999@cluster0.jktqllf.mongodb.net")  //removed /PostsDatabase

    console.log("connected")

}


