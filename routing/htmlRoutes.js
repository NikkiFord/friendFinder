const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', function (request, response){
    response.sendFile(path.join(__dirname,"../public/home.html"));
})

router.get('/survey', function (request, response){
    response.sendFile(path.join(__dirname,"../public/survey.html"));
})

module.exports = router; 
