const nodemailer = require('nodemailer');

const Time4MishnaEmail = "shalommoise@hotmail.co.uk"; 

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: Time4MishnaEmail,
      // pass:
    }

  });
  

  

  module.exports = {Time4MishnaEmail, transporter}