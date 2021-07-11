const {createSiyum} = require("../models/siyumim.models")

exports.postSiyum =(req,res,next)=>{
    createSiyum(req.body)
    .then((siyumDetails)=>{
        res.status(201).send({siyumDetails})
    })

}