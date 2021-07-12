const {createSiyum, sendSiyumim, sendSingleSiyum} = require("../models/siyumim.models")

exports.postSiyum =(req,res,next)=>{
    createSiyum(req.body)
    .then((siyumDetails)=>{
        res.status(201).send({siyumDetails})
    })

}

exports.getSiyumim =(req,res,next)=>{
    sendSiyumim()
    .then((siyumim)=>{
    res.send({siyumim})
    })
}

exports.getSingleSiyum = (req,res,next)=>{
   const {admin_id} = req.params;
   sendSingleSiyum(admin_id)
   .then((siyumList)=>{
       res.send({siyumList})
   })

}