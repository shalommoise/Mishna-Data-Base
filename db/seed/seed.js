const {pool, client} = require("../connection.js");

const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle } = require("../utils/utlis");




const addMasechtaDetails = ()=>{    
    
    return pool.connect()
       .then(()=>{
           const  insertDetails = (masechtaDetails, n)=>  {
            const {masechtaId,masechtaName, masechtaNameHe, sederName, perakimNumber, mishnayosNumber } = masechtaDetails[n];     
    return   pool.query(`INSERT INTO masechta_table 
       (masechta_id, masechta_name, masechta_name_he, seder_name, number_of_perakim, number_of_misnayos) 
       VALUES
       (${masechtaId} ,'${masechtaName}', '${masechtaNameHe}', '${changeSederTitle[sederName]}', ${perakimNumber}, ${mishnayosNumber});`)
       .then(()=>{
           console.log(`added ${masechtaName}`);   
           return  n < masechtaDetails.length - 1 && insertDetails(masechtaDetails, n + 1); 
        })}
        insertDetails(masechtaDetails, 0)
    }).finally(()=> client.end())
       
}


addMasechtaDetails();





   


