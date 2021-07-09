
const {sendMultipleMishnayos} = require("../models/mishnayos.models")
const {changefirstLetterToUpperCase} = require("../db/utils/utils") 
exports.getMultipleMishnayos =(req,res,next)=>{
    const {masechta} = req.params;
    const {perek, mishna} = req.query;
    const masechtaToCaps = changefirstLetterToUpperCase(masechta);
    sendMultipleMishnayos(masechtaToCaps, perek, mishna)
    .then((mishnayos)=>{
        res.send({mishnayos})
    })
}