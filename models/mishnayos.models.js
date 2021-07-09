const {pool, client} = require("../db/connection");

exports.sendMultipleMishnayos = (masechta)=>pool.connect()
.then(()=>pool.query(`SELECT * FROM mishna_table WHERE masechta_name='${masechta}';`))
.then((res)=>{
const {rows} = res;
return rows;
})
