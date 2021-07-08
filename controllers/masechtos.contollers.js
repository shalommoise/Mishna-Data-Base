
const {sendMasechtosBySeder, sendAllMasechtos} = require("../models/masechtos.models")

exports.getMasechtosBySeder=(req, res, next)=>{
    const {seder} = req.params;
    sendMasechtosBySeder(seder)
    .then((masechtos)=>{
        res.send({masechtos})
    })
    .catch(next)
    
}

exports.getAllMasechtos = (req,res,next) => {
    sendAllMasechtos()
    .then((masechtos)=>{
        res.send({masechtos})
    })
    .catch(next)
}