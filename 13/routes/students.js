var express =  require("express");
var router =  express();
var mysql = require("mysql");
var config = require("config");


var connection =  mysql.createConnection({
    host: config.get("host"),
    database:config.get("database"),
    user : config.get("user"),
    password:config.get("password")
});


connection.connect();
router.use(express.json());

router.get("/",(request, response)=>{
    var queryText = "select * from Student";
    
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});

router.get("/:no",(request, response)=>{
    var queryText = `select * from Student where no = ${request.params.no}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});


router.post("/",(request, response)=>{
   
            var No = request.body.no;
            var Name = request.body.name;
            var Address = request.body.address;

            var queryText = `insert into Student values(${No}, '${Name}', '${Address}')`;
            connection.query(queryText,(err, result)=>{
            if(err==null)
                {
                    response.send(JSON.stringify(result));
                }
                else{
                    response.send(JSON.stringify(err));
                }
        });
    
});


router.put("/:no",(request, response)=>{
    var no = request.params.no;
    var name = request.body.name;
    var address = request.body.address;

    var queryText = `update Student set Name='${name}', address= '${address}' where no=${no}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});



router.delete("/:no",(request, response)=>{
    var no = request.params.no;
    var queryText = `delete from Student where no = ${no}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});

module.exports = router;
