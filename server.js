const express = require("express");
const app = express();
const PORT = 3000;
const htmlRoutes = require("./routing/htmlRoutes");
app.use(htmlRoutes);







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });