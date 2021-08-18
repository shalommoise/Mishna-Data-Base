const {pool, client} = require("../db/connection");
const {sendSingleMasechtaDetails} = require("./masechtos.models")
exports.sendMasechtaDetailsFromIds = (start, end) => {
    return pool.query(`SELECT mishna_id, masechta_name FROM mishna_table Where mishna_id BETWEEN ${start} AND ${end} ORDER BY mishna_id;`)
    .then((res)=>{
      const {rows} = res;
      const arr = [];
      rows.forEach((row)=>{
        if(!arr.includes(row.masechta_name))arr.push(row.masechta_name);
      })
      return arr[0];
    }).then((masechta)=>{
    return sendSingleMasechtaDetails(masechta);
    })
}