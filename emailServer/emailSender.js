
const  {Time4MishnaEmail, transporter} = require("./emailServer");
const adminEmail = require("./emails/adminEmail")
const userEmail = require("./emails/userEmail")


const emailTypes =(data)=> {
  const {type} = data;
  if (type === "adminSignUp") return adminEmail(data);
  else if (type === "userSignUp") return userEmail(data);
}

const completeEmail = (siyumDets) =>{
    const email = emailTypes(siyumDets);
    return {
    from: Time4MishnaEmail,
    ...email
}
  };


  const receiveSiyumDetails =(siyumDets)=>{

    const email = completeEmail(siyumDets);
    
    // sendEmail(email)
    
 
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