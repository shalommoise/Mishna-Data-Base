const {sendSedarim} = require("../models/sedarim.models")

exports.getSedarim =(req, res, next)=>{
    sendSedarim()
    .then((sedarim)=>{
        res.send({sedarim})
    })
    .catch(next)
    
}

