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
                                 .then(()=>{
                                     console.log(admin_email)
                                 })
         }).catch((err)=>console.log(err))

         exports.sendSiyumim =()=>  pool.connect()
                .then(()=>{
                    return pool.query("SELECT * FROM siyum_makers WHERE isOpen = 'true';")
                    .then((res)=>{
                        const {rows} = res;
                        const results = rows.map((row)=>{
                            const copy = {...row};
                            copy.isOpen = copy.isOpen = "true" ? true : false;
                            return copy;  
                        })
                        return results;
                    })
                })