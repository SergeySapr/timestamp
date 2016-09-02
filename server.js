const express = require('express');
const dateformat = require("dateformat");
var app = express();

app.get('/:str',function(req,res){
 var str = req.params.str.toString();
 var naturalDate = new Date(str);
 if (isNaN(naturalDate.valueOf())) {
     naturalDate = new Date(str*1000)
     
 }
 console.log(str,naturalDate);
 //if is natural date
 if (!isNaN(naturalDate.valueOf())) {
    res.send("'unix':"+naturalDate.valueOf()/1000+",'natural':"+dateformat(naturalDate,"dd mmm yyyy"))
 } else res.send("This is not a date. Provide either a natural date value (eg 01Jan2016) or a unix timestamp (eg  1451606400).");
 
});

app.get('/',function(req,res){
 res.send("Provide either a natural date value (eg 01Jan2016) or a unix timestamp (eg  1451606400).");
});

app.listen(process.env.PORT||8080,process.env.IP, function () {console.log(process.env.PORT,process.env.IP);
  //  console.log(process.env);
  console.log('Example app listening on port 8080!');
});