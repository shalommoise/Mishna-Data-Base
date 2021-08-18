const {sendMasechtaDetailsFromIds}= require("../models/mishna.models")

exports.getMasechtaDetailsFromIds = (req,res, next)=>{

const {start, end} = req.query;
sendMasechtaDetailsFromIds(start, end)
.then((masechtaDetails)=>{
res.send({masechtaDetails})
})
}