const {pool, client} = require("../db/connection");
const {altMasechtaNames, removeApostraphe, getDate} = require("../db/utils/utils")
const {gethebrewDate} = require("../db/utils/hebrewDateConverter")

const createSiyum = (siyumInfo)=> {
  
   const {admin_email, admin_fname, admin_sname, siyum_name , finish_date, isopen, msg} = siyumInfo;

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
                          
                         const makeTable = createSiyumTable(admin_id)
                         return Promise.all([makeTable]).then(()=>result)
                                                          
         })}).catch((err)=>console.log(err));
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

const findMishnaNumber = (masechta, startPerek, endPerek) =>{

  return pool.query(`SELECT mishna_id FROM mishna_table Where masechta_name = '${masechta}' ORDER BY mishna_id;`)
  .then((res)=>{
    const {rows} = res;
    const answer = {mishnaStart: rows[0].mishna_id, mishnaEnd :  rows[rows.length-1].mishna_id};
    return answer;
  }).catch((err)=> console.log(err))
}
const findMasechta = (start_mishna, end_mishna) =>{
  return pool.query(`SELECT mishna_id, masechta_name FROM mishna_table Where mishna_id BETWEEN ${start_mishna} AND ${end_mishna} ORDER BY mishna_id;`)
  .then((res)=>{
    const {rows} = res;
    const arr = [];
    rows.forEach((row)=>{
      if(!arr.includes(row.masechta_name))arr.push(row.masechta_name);
    })
    if (arr.length === 1) return {masechta: arr[0]};
  })
}
const signUp = (admin_id, userDetails) => {
  
        const {masechta, user_email, user_fname, user_sname, start_mishna, end_mishna} = userDetails;
        const figureOut = masechta ? findMishnaNumber(masechta, start_mishna, end_mishna) : findMasechta(start_mishna, end_mishna) ;
        return figureOut.then((answer)=>{
              let {mishnaStart, mishnaEnd, masechta} = answer;
                  if(!mishnaStart) mishnaStart = start_mishna;
                  if(!mishnaEnd) mishnaEnd = end_mishna;   
                  if(!masechta) masechta = userDetails.masechta; 
            return pool.query(`INSERT INTO siyum_number_${admin_id} (user_email, user_fname, user_sname, masechta, start_mishna, end_mishna) 
          VALUES ('${user_email}', '${user_fname}', '${user_sname}', '${masechta}', ${mishnaStart}, ${mishnaEnd}) RETURNING *;`)
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
        })
        
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
const editUserDetails = (admin_id, user_id, reminder) =>{

  const id = admin_id +'';  
  return   pool.query(`UPDATE Siyum_number_${id} SET reminder = '${reminder}' WHERE user_id = ${user_id} RETURNING *;`)
          .then((res)=>{
            const {rows} = res;
            const [result] = rows;
            return result;
          })}
    module.exports = {createSiyum, sendSiyumDetails,
         sendSiyumim, sendSingleSiyumList, signUp, editSiyumDetails, editUserDetails}