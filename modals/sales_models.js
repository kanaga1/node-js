var mongoose = require('mongoose')
var schema = mongoose.Schema;

var SalesSchema = new schema({
  
    Sale_Id : {
        type:String,
        required:true,
       
    },
    Date :{
        type : Date,
        required:true
    }
   
},{
    timestamps:true
})

var Sales = mongoose.model('USER',SalesSchema);

module.exports = Sales;