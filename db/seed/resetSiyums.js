const {pool, client} = require("../connection.js");

const resetSiyum = ()=>pool.connect().then(()=>pool.query(`DROP TABLE IF EXISTS siyum_makers;
CREATE TABLE siyum_makers
(
    admin_id SERIAL PRIMARY KEY,
  admin_email VARCHAR NOT NULL,
  admin_fname VARCHAR NOT NULL,
  admin_sname VARCHAR NOT NULL,
  siyum_name VARCHAR NOT NULL,
  siyum_type VARCHAR DEFAULT 'Shloshim',
  date_made VARCHAR,
  finish_date VARCHAR NOT NULL,
  msg VARCHAR,
  isOpen VARCHAR  DEFAULT 'true'
);`)).then(()=>{
    dropSiyumListTable(1)
});


const dropSiyumListTable = (n)=>{ 
    return pool.query(`DROP table Siyum_number_${n}; `)
.then(()=>dropSiyumListTable(n+1)).catch(()=>console.log("finished"))
}

resetSiyum();


module.exports = resetSiyum;