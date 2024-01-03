const express = require("express");

const app = express();
app.use(express.json());

app.get("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const password = req.body.password;
})