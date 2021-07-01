const {pool, client} = require("../connection.js");

const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle } = require("../utils/utlis");




const addMasechtaDetails = (masechtos, number)=>{
 
    // const {masechtaId,masechtaName, masechtaNameHe, sederName, perakimNumber, mishnayosNumber } 
    const masechtaIds = masechtaDetails.map((datum)=> datum.masechtaId);
    const masechtaNames = masechtaDetails.map((datum)=> datum.masechtaName);
    const masechtaNamesHe = masechtaDetails.map((datum)=> datum.masechtaNameHe);
    const sederNames = masechtaDetails.map((datum)=> datum.sederName);
    return pool.connect()
       .then(()=>pool.query(`INSERT INTO masechta_table 
       (masechta_id, masechta_name, masechta_name_he, seder_name, number_of_perakim, number_of_misnayos) 
       VALUES
       (${masechtaId} ,'${masechtaName}', '${masechtaNameHe}', '${changeSederTitle[sederName]}', ${perakimNumber}, ${mishnayosNumber});`))
       .then(()=>{
           console.log(`added ${masechtaName}`);    
            return  number <= masechtaDetails.length ? addMasechtaDetails(masechtos, number - 1): console.log("finished");
        }).catch((err)=>{
            console.log(err)
        })
}


addMasechtaDetails(masechtaDetails, 0);




   


