const todoSchemas=require("../models/todoSchemas");
const  mongoos=require("mongoose");

exports.postData = (req,res) =>{
    const data= new todoSchemas({
        year : req.body.year,
        make :req.body.make,
        model : req.body.model
    });

data.save().then(data =>{
    if(data){
        return res.status(200).json({data : data, message : "Success", status : true})
    }else{
        return res.status(401).json({data : "Somthing was wrong",message : "Bad Request",status :false});
    }
}).catch(err =>{
    console.log(err);
})


}


exports.getData = (req,res) =>{
    todoSchemas.find().then(data =>{
        return res.status(200).json({data : data, message : "Success", status : true})
    }).catch(err =>{ 
        console.log(err); 
    })        
}