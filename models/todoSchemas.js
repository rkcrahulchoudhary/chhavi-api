const mongoose =require("mongoose");
const { Schema } = mongoose;

const todoSchemas = new Schema({
    year : Number,
    make : String,
    model : String
});

const todoModel =mongoose.model("todoSchemas", todoSchemas);

module.exports =todoModel;