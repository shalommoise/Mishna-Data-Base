const {pool, client} = require("../connection.js");

const mishnaNames = require("../data/mishnaNames.json");
const {getMishnaInfo} = require("../data/MasechtaDetails");


  


mishnaNames.forEach((masechta)=>{
getMishnaInfo(masechta).then((res)=>  {
    const {masechtaName, masechtaNameHe, sederName, perakimNumber, mishnayosNumber } = res;

    return pool.connect()
    .then(()=>pool.query(`INSERT INTO masechta_table 
    (masechta_name, masechta_name_he, seder_name, perakim_number, mishnayos_number) 
    VALUES ('${masechtaName}', '${masechtaNameHe}', '${sederName}', ${perakimNumber}, ${mishnayosNumber});`))
    .then(()=>console.log(`added ${masechtaName}`))
    .catch((err)=>console.log(`ERR: ${err}`))
})
});
   


