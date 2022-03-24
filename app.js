const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bodyParser = require("body-parser");
const app = express(); 
const routes=require("./routes/todoroute");
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://todoAdmin:todoAdmin@todotest.wsehl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    console.log("Connect Estb.....");
}).catch(err =>{
    console.log(err);
});


app.use("/api",routes);


module.exports = app;