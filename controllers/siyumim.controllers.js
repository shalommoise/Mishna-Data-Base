const {createSiyum, sendSiyumim, sendSingleSiyum, signUp} = require("../models/siyumim.models")
const {altMasechtaNames, changeMasechtaNames, switchAltName} = require("../db/utils/utils");
const {changefirstLetterToUpperCase} = require("../db/utils/utils");
const {receiveSiyumDetails}= require("../emails/adminEmail.js")

exports.postSiyum =(req,res,next)=>{
    createSiyum(req.body)
    .then((siyumDetails)=>{
        receiveSiyumDetails({siyumDetails})
        res.status(201).send({siyumDetails})
    })

}

exports.getSiyumim =(req,res,next)=>{
    sendSiyumim()
    .then((siyumim)=>{
    res.send({siyumim})
    })
}

exports.getSingleSiyum = (req,res,next)=>{
   const {admin_id} = req.params;
   sendSingleSiyum(admin_id)
   .then((siyumList)=>{
       res.send({siyumList})
   })

}

exports.postMasechtaLearn =(req,res,next)=>{
    const {admin_id} = req.params;
    const userDetails = req.body;
    userDetails.user_fname = changefirstLetterToUpperCase(userDetails.user_fname);
    userDetails.user_sname = changefirstLetterToUpperCase(userDetails.user_sname);
    userDetails.masechta = changefirstLetterToUpperCase(userDetails.masechta)
        
    const checkifAltName = Object.keys(altMasechtaNames).some((name)=>name===userDetails.masechta);
    const masechtaName = checkifAltName ? userDetails.masechta : switchAltName(altMasechtaNames)[userDetails.masechta];
    userDetails.masechta = masechtaName;
    signUp(admin_id, userDetails)
    .then((user)=>{
        res.status(201).send({user})
    })
}