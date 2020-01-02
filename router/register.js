var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var router = express.Router()
var register = require('../modals/register_model')
var salesdetails = require('../modals/sales_models')
const moment = require('moment')
const today = moment().startOf('day')


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

router.get('/Getrec',(req,res)=>{

    register.find().then(c=>{
        res.status(200).json(c);
    }).catch(err=>{
        res.status(400).json(err);
    })
})
router.get('/Getsale',(req,res)=>{

    salesdetails.find().then(c=>{
        res.status(200).json(c);
    }).catch(err=>{
        res.status(400).json(err);
    })
})
// router.post('/sale',(req,res)=>
// {
//     var Sale_Id = req.body.Sale_Id;
//     var date = new Date();
//     console.log(req.body.Sale_Id)
//     var record = new salesdetails({
//         Sale_Id:Sale_Id,
//         Date :date.toDateString()
           
//     });
//     record.save().then(create=>{
//         res.status(200).json();
//         console.log(create);
//     }).catch(err=>{
//         console.log(err)
//         res.status(400).json("err");
//     })
//     register.findOne({P_name :Sale_Id },(err,data)=>
//     {
//         if (err) throw err;
//         console.log(data);

//         res.json(data);
//     })
// })


router.post('/regis',(req,res)=>{
    var EPCID = req.body.EPCID;
    var P_Id = req.body.P_ID;
    var P_name = req.body.P_name;
    var P_type = req.body.P_type;
    var unit = req.body.unit;
    console.log(req.body.EPCID,P_Id)
    var record = new register({
        EPCID:EPCID,
        P_Id:P_Id,
        P_name:P_name,
        P_type:P_type,
        unit:unit
        
    });
    record.save().then(create=>{
        res.status(200).json();
        console.log(create);
    }).catch(err=>{
        console.log(err)
        res.status(400).json("err");
    })
})

router.post('/post',(req,res)=>{
    var Date = req.body.Date;
    var Total = req.body.Total;
    var Available = req.body.Available;
    var Sold = req.body.Sold;

   
    var record = new salesdetails({
        Date:Date,
        Total:Total,
        Available:Available,
        Sold:Sold,
        
        
    });
    record.save().then(create=>{
        res.status(200).json();
        console.log(create);
    }).catch(err=>{
        console.log(err)
        res.status(400).json("err");
    })
})

router.post('/gett',(req,res)=>{
    salesdetails.find({
    createdAt: {
        $gte: today.toDate(),
        $lte: moment(today).endOf('day').toDate()
    }
}).then(c=>{
    res.status(200).json(c);
    console.log(c);
           
}).catch(err=>{
    console.log(err)
    res.status(400).json("err");
})
})


router.post('/login', (req,res) => {
    var name = req.body.name;
    var password = req.body.password;
    console.log(req.body.name)
    register.find({name : name}).then(c => {
       
        res.status(200).json(c);

       
    }).catch(err => res.status(401).json(
     "Username or Password Incorrect"
    ))
})
router.put('/reg_update',(req,res)=>{
    var email = req.body.emailid;
    var name = req.body.name;
    var password = req.body.password;
    
    register.findOneAndUpdate({emailid:email},{$set:{
        password:password,
        name:name
    }}).then(update=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json("Updated Successfully")
        console.log(update)
    }).catch(err=>{
        res.statusCode = 403;
        res.setHeader('Content-Type','application/json');
        res.json(err)
    })
})

module.exports = router;  