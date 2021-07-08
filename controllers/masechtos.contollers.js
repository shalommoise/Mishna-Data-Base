
const {sendMasechtosBySeder, sendAllMasechtos} = require("../models/masechtos.models")
const {changefirstLetterToUpperCase} = require("../db/utils/utils") 
exports.getMasechtosBySeder=(req, res, next)=>{
    const {seder} = req.params;
    const sederToCaps = changefirstLetterToUpperCase(seder);
    sendMasechtosBySeder(sederToCaps)
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