const {firstHalf, secondHalf} = require("./emailTemplates")

const userEmail = (data)=>{
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
        isopen
     
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

            Siyum Date is ${finish_date} 
            <br>
             Contact Siyum Organiser : ${admin_fname} ${admin_sname},
             <a href="${admin_email}">${admin_email}</a>
    
            ${secondHalf}
     
`}

}


module.exports = userEmail;