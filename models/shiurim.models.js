const {pool, client} = require("../db/connection");
const {altMasechtaNames, changeMasechtaNames, switchAltName} = require("../db/utils/utils")

exports.sendShiurByShiurId = (shiur_id) =>pool.connect()
.then(()=>pool.query(`SELECT * FROM shiurim_table WHERE shiur_id =${shiur_id}`))
.then((res)=>{
    
    const [result] = res.rows;
    return result;
})