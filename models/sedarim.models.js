const {pool, client} = require("../db/connection");

exports.sendSedarim =()=>pool.connect()
.then(()=>pool.query("SELECT * FROM sedarim_table;"))
.then((res)=>{
const {rows} = res;
return rows;
})