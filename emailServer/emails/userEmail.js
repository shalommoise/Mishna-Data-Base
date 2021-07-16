const {firstHalf, secondHalf} = require("./emailTemplates")
// const {gethebrewDate} = require("../../db/utils/hebrewDateConverter")
const axios = require("axios")
const userEmail = (data)=>{
;
    const {siyumDetails, userDetails} = data.user;
    const {  
        user_id,
        user_email,
        user_fname,
        user_sname,
        masechta,
        start_mishna,
        end_mishna,
        reminder
     
    } = userDetails;
const {  
        admin_id,
        admin_email,
        admin_fname,
        admin_sname,
        siyum_name,
        siyum_type,
        date_made,
        finish_date,
        msg,
        isopen,
        hebFinishDate
     
    } = siyumDetails;
    return  {
    to: user_email,
    subject: `Learning for ${siyum_name}`,
    html:`${firstHalf(siyum_name)}
            Hi ${user_fname},
            
            Thank you for making a Learning Maseches ${masechta} for ${siyum_name}.<br>
            <a href="https://time4torah.org/masechta/${masechta}">Maseches ${masechta} </a>
            <br>
            Here is the link for people to sign up for mishnayos.<br>
          
                 <a href="http://localhost:9090/api/siyum/${admin_id}">Shloshim Sign Up Link</a>
            <br>
            &nbsp;<br>

          
            <br>
             Contact Siyum Organiser : ${admin_fname} ${admin_sname},
             <a href="${admin_email}">${admin_email}</a>
             <br>
             Siyum Date is <span id="date">${finish_date} </span> <span id="hebDate">${hebFinishDate}</span>
         
             
             
            ${secondHalf}
     
`}

}


module.exports = userEmail;