const nodemailer = require('nodemailer');
const  {Time4MishnaEmail, transporter} = require("./emailServer");
const adminEmail = require("./adminEmailTemplate")





const completeEmail = (siyumDets) =>{
    const email = adminEmail(siyumDets)
    return {
    from: Time4MishnaEmail,
    ...email
}
  };


  const receiveSiyumDetails =(siyumDets)=>{
    const email = completeEmail(siyumDets.siyumDetails);
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