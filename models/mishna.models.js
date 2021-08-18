const {pool, client} = require("../db/connection");
const {sendSingleMasechtaDetails} = require("./masechtos.models")
exports.sendMasechtaDetailsFromIds = (start, end) => {
    return pool.query(`SELECT mishna_id, masechta_name FROM mishna_table Where mishna_id BETWEEN ${start} AND ${end} ORDER BY mishna_id;`)
    .then((res)=>{
      const {rows} = res;
      const masechtos = [];
      rows.forEach((row)=>{
        if(!masechtos.includes(row.masechta_name))masechtos.push(row.masechta_name);
      })
      return masechtos;
    }).then((masechtos)=>{
        const newArr = [];
        const getMasechta = (i, arr)=>{
            return sendSingleMasechtaDetails(arr[i])
            .then((res)=>{
                newArr.push(res);
                return i < arr.length - 1 ? getMasechta(i+1, arr) : newArr
            })       
        }

    return getMasechta(0, masechtos);
    })
}