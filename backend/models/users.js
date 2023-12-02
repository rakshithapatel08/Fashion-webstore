const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI);

// schema ---> this is the way data must be stored in mongodb
const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        validate: {
            validator: function(v) {
              return /\S+@+\S+\.\S{2,3}/.test(v);
            },
            message: props => `${props.value} is not a valid Email!`
          },       
    }
}) 

// model ---> Naming a collection & blueprint to create a document
// and export model

module.exports = mongoose.model("User", userSchema);