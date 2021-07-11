const {createSiyum, sendSiyumim} = require("../models/siyumim.models")

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