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
  isOpen VARCHAR  DEFAULT 'true',
  heb_date VARCHAR
);`)).then(()=>{
    dropSiyumListTable(1)
});


const dropSiyumListTable = (n)=>{ 
    return pool.query(`DROP table Siyum_number_${n}; `)
.then(()=>dropSiyumListTable(n+1)).catch(()=>insertExample())
}
const insertExample = ()=>pool.query("INSERT INTO siyum_makers (admin_email, admin_fname, admin_sname, siyum_name , finish_date, date_made) VALUES ('mshalom689@gmail.com', 'Shalom', 'Moise', 'Yitzchak Ben Avraham', '15/08/21', '15/07/21') RETURNING *;")
                           .then(()=>pool.query(`CREATE TABLE Siyum_number_1 (
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
                        )`)).then(()=>pool.query("INSERT INTO Siyum_number_1 (user_email, user_fname, user_sname, masechta) VALUES ('mshalom689@gmail.com', 'Shalom', 'Moise', 'Peah');"))
                        .then(()=>console.log("Reset finished"))

resetSiyum();

module.exports = {resetSiyum};