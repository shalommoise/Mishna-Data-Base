
const {sendShiurByShiurId} = require("../models/shiurim.models")

exports.getShiurByShiurId = (req,res,next)=>{
    const {shiur_id} = req.params;
    sendShiurByShiurId(shiur_id)
    .then((shiur)=>{
        res.send({shiur})
    })
}