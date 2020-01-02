var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var mongo = require('mongodb');


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

var RegRecRouter = require('./router/register')

app.use('/',RegRecRouter); 

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods",'PUT,GET,DELETE,POST,OPTIONS');
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

mongoose.connect("mongodb+srv://kanaga:kanaga@cluster0-kbwam.mongodb.net/rfid",{ useNewUrlParser: true }, function(err, client) {
 
if (err) {
     console.log("mongo error", err);
     return;
  }
  else{
      console.log("connect"+ client)
  }
});


var port = process.env.PORT || 4000;

app.listen(port,err=>{
    if(err)
    {
        console.log("Server Error")
    }
    console.log(`The server is successfully running at ${port}`)
})
