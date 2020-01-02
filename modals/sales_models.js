var mongoose = require('mongoose')
var schema = mongoose.Schema;

var SalesSchema = new schema({
  
    // Sale_Id : {
    //     type:String,
    //     required:true,
       
    // },
    Date :{
        type : String,
        required:true
    },
    Total:{
        type:String,
        required:true
    },
    Available:{
        type:String,
        required:true
    },
    Sold:{
        type:String,
        required:true
    }
   
},{
    timestamps:true
})

var Sales = mongoose.model('USER',SalesSchema);

module.exports = Sales;