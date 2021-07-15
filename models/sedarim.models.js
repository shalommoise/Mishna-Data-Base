const {pool, client} = require("../db/connection");

exports.sendSedarim =()=>
pool.query("SELECT * FROM sedarim_table;")
.then((res)=>{
const {rows} = res;
return rows;
})