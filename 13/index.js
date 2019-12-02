var express =  require("express");
var std = require("./routes/students");
var empsRouter = require("./routes/emps");
var config = require("config");

var port =   parseInt(config.get("port"));
var app =  express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/students", std);
app.use("/emps", empsRouter);

app.listen(port, ()=>{
    console.log("Server Started..");
});




