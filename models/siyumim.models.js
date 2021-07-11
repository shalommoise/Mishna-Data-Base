const {pool, client} = require("../db/connection");


exports.createSiyum = (siyumInfo)=> pool.connect()
         .then(()=>{
             const {admin_email, admin_fname, admin_sname, siyum_name , finish_date} = siyumInfo;
             return pool.query(`INSERT INTO siyum_makers (admin_email, admin_fname, admin_sname, siyum_name , finish_date)
                                 VALUES ('${admin_email}', '${admin_fname}', '${admin_sname}', '${siyum_name}', '${finish_date}') RETURNING *;`)
                                 .then((res)=>{
                                     const {rows} = res;
                                     const [result] = rows;
                                     return result;
                                 })
         }).catch((err)=>console.log(err))