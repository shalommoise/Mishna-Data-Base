const nodemailer = require('nodemailer');
const  {Time4MishnaEmail, transporter} = require("./emailServer");
const adminEmail = require("./adminEmail")
const userEmail = require("./userEmail")




const completeEmail = (siyumDets) =>{
  const {siyumDetails, admin_id, user} = siyumDets;
    const email = siyumDetails ? adminEmail(siyumDetails) : userEmail(admin_id, user);
    
    return {
    from: Time4MishnaEmail,
    ...email
}
  };


  const receiveSiyumDetails =(siyumDets)=>{
    const email = completeEmail(siyumDets);
    sendEmail(email)
    
 
}

const sendEmail = (mailInfo)=>{
  transporter.sendMail(mailInfo, function(error, info){
    if (error) {
      console.log("error: " , error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}




  module.exports = {receiveSiyumDetails}