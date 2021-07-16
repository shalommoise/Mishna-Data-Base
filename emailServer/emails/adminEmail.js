const {firstHalf, secondHalf} = require("./emailTemplates")
const adminEmail = (data)=>{

    const {admin_id, admin_email, admin_fname, admin_sname, siyum_name, siyum_type, finish_date, hebFinishDate, msg, isOpen} = data.siyumDetails;
return  {
    to: admin_email,
    subject: `Siyum for ${siyum_name}`,
    html:` 
    ${firstHalf(siyum_name)} 
        Hi ${admin_fname},
            
            Thank you for making a siyum for ${siyum_name}.<br>
            <br>
            Here is the link for people to sign up for mishnayos.<br>
                 <a href="http://localhost:9090/api/siyum/${admin_id}">Shloshim Sign Up Link</a>
            <br>
            &nbsp;<br>
            Siyum Date is <span id="date">${finish_date} </span> <span id="hebDate">${hebFinishDate}</span>
            <script>
            
            </script>
    ${secondHalf}
            
      
`}

}


module.exports = adminEmail;