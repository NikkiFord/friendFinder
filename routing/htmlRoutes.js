const express = require("express");
const router = express.Router();

router.get('/', function (request, response){
    response.sendFile(path.join(__dirname,"public/home.html"));
})

router.get('/survey', function (request, response){
    response.sendFile(path.join(__dirname,"public/home.html"));
})

module.exports = router; 
