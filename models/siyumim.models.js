const {pool, client} = require("../db/connection");
const {altMasechtaNames, removeApostraphe, getDate} = require("../db/utils/utils")
const {gethebrewDate} = require("../db/utils/hebrewDateConverter")

const createSiyum = (siyumInfo)=> {
   const {admin_email, admin_fname, admin_sname, siyum_name , finish_date, isopen, msg} = siyumInfo;
//    const hebDate = ''
 let columns =  isopen === "false" ? ", isopen ": "";
   let values =  isopen === "false" ? ", false ":"";
   columns += msg ? ', msg' : '';
   values += msg ? `, '${removeApostraphe(msg)}'` : '';
 return gethebrewDate(finish_date).then((hDate)=>{
      return hDate
    }).then((hebDate)=>{
  return pool.query(`INSERT INTO siyum_makers (admin_email, admin_fname, admin_sname, siyum_name , finish_date, date_made, heb_date ${columns})
                       VALUES ('${admin_email}', '${admin_fname}', '${admin_sname}', '${siyum_name}', '${finish_date}' , '${getDate()}','${hebDate}' ${values}) RETURNING *;`)
                       .then((res)=>{
                           const {rows} = res;
                           const [result] = rows;
                           const {admin_id} = result;
                           createSiyumTable(admin_id)
                             return result;                                
         })})
       .catch((err)=>console.log(err));
        }

  const sendSiyumim =()=> pool.query("SELECT * FROM siyum_makers WHERE isopen = 'true';")
        .then((res)=>{
            const {rows} = res;
            const results = rows.map((row)=>{
            const copy = {...row};
             copy.isopen = copy.isopen = "true" ? true : false;
                return copy;  
                    })
                return results;
                  })
         

   const sendSingleSiyumList = (admin_id) => 
             pool.query(`SELECT * FROM Siyum_number_${admin_id}`)
                .then((res)=>{
                    const {rows} = res;
                    return rows;
                })



const signUp = (admin_id, userDetails) => {
        const {masechta, user_email, user_fname, user_sname, start_mishna, end_mishna } = userDetails;
        return pool.query(`INSERT INTO Siyum_number_${admin_id} (user_email, user_fname, user_sname, masechta) 
        VALUES ('${user_email}', '${user_fname}', '${user_sname}', '${masechta}') RETURNING *;`)
       .then((res)=>{
  
           const {rows} = res;
           const [results] = rows;
          results.masechta = altMasechtaNames[results.masechta]
           return results;
       }).then((userDetails)=>{
           return sendSiyumDetails(admin_id)
           .then((siyumDetails)=>{
          
                return {siyumDetails, userDetails}
            
           })
      
           
       })
       .catch((err)=>console.log(err))
    }


    const createSiyumTable =(id)=>{
        return pool.query(`CREATE TABLE Siyum_number_${id} (
            user_id SERIAL PRIMARY KEY,
            user_email VARCHAR NOT NULL,
            user_fname VARCHAR NOT NULL,
            user_sname VARCHAR NOT NULL,
            masechta VARCHAR,
            start_mishna INT,
            end_mishna INT,
            reminder VARCHAR DEFAULT 'justBefore',
            FOREIGN KEY(masechta) REFERENCES masechta_table(masechta_name),
            FOREIGN KEY(start_mishna) REFERENCES mishna_table(mishna_id),
            FOREIGN KEY(end_mishna) REFERENCES mishna_table(mishna_id)
        )`)
    }

 const sendSiyumDetails = (admin_id) => 
    pool.query(`SELECT * FROM siyum_makers WHERE admin_id=${admin_id};`)
                   .then((res)=>{
                    const {rows} = res;
                    const [results] = rows;
                    return results;
                   })
  

const editSiyumDetails = (admin_id, edits)=> {
              const {isopen} = edits;
             
              let edit = isopen ? `SET isopen ='${isopen}'` : ''
              
              return pool.query(`UPDATE siyum_makers ${edit} WHERE admin_id=${admin_id} RETURNING *;`)
              .then((res)=>{
                  const {rows} = res;
                  const [results] = rows;
                    return results;
              }).catch((err)=>console.log(err))
          }

    module.exports = {createSiyum, sendSiyumDetails,
         sendSiyumim, sendSingleSiyumList, signUp, editSiyumDetails}