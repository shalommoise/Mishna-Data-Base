
const {sendMasechtosBySeder} = require("../models/masechtos.models")

exports.getMasechtosBySeder=(req, res, next)=>{
    const {seder} = req.params;
    sendMasechtosBySeder(seder)
    .then((masechtos)=>{
        res.send({masechtos})
    })
    .catch(next)
    
}