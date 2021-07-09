
const {sendMultipleMishnayos} = require("../models/mishnayos.models")
const {changefirstLetterToUpperCase} = require("../db/utils/utils") 
exports.getMultipleMishnayos =(req,res,next)=>{
    const {masechta} = req.params;
    const masechtaToCaps = changefirstLetterToUpperCase(masechta);
    sendMultipleMishnayos(masechtaToCaps)
    .then((mishnayos)=>{
        res.send({mishnayos})
    })
}