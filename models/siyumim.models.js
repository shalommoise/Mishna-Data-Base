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
                                 .then((res)=>{
                                    const {admin_id} = res;
                                   return pool.query(`CREATE TABLE Siyum_number_${admin_id} (
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

   exports.sendSingleSiyum = (admin_id) => pool.connect()
           .then(()=>{
               return pool.query(`SELECT * FROM Siyum_number_${admin_id}`)
                .then((res)=>{
                    const {rows} = res;
                    return rows;
                })
           })