var mongoose = require('mongoose')
var schema = mongoose.Schema;

var RegSchema = new schema({
  
    EPCID : {
        type:String,
        required:true,
      
    },
    P_Id:{
        type:String,
        required:true
    },
    P_name:{
        type:String,
        required:true
    },
    P_type:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

var Regis = mongoose.model('RFID',RegSchema);

module.exports = Regis;