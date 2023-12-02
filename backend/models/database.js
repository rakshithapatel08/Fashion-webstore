// database ---> collections ---> documents ---> object data

const mongoose = require("mongoose");
require("dotenv").config();

// mongoose client backend connect with database

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI);

// schema ---> this is the way data must be stored in mongodb
const fashionSchema = new mongoose.Schema({
    gender: String,
    category: String,
    garment_id: String,
    garment_img_url: String,
    name:String,
    price:Number,
    desc:String,
    success: Boolean
}) 

// model ---> Naming a collection & blueprint to create a document
// and export model

module.exports = mongoose.model("Garment", fashionSchema);
