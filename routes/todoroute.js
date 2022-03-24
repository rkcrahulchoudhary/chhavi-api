const express = require("express");
const routes = express.Router();
const todcontroller = require("../controllers/todocontroller");

routes.post('/post', todcontroller.postData);
routes.get('/get', todcontroller.getData);


module.exports = routes;