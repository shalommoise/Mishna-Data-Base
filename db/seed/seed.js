const {pool, client} = require("../connection.js");

const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle, reorderMasechtaArray } = require("../utils/utlis");


const reorderedMasechtos = reorderMasechtaArray(masechtaDetails, "masechtaId");

const addMasechtaDetails = ()=>{    
    
    return pool.connect()
       .then(()=>{
           const  insertDetails = (reorderedMasechtos, n)=>  {
            const {masechtaId,masechtaName, masechtaNameHe, sederName, perakimNumber, mishnayosNumber } = reorderedMasechtos[n];     
    return   pool.query(`INSERT INTO masechta_table 
       (masechta_id, masechta_name, masechta_name_he, seder_name, number_of_perakim, number_of_misnayos) 
       VALUES
       (${masechtaId} ,'${masechtaName}', '${masechtaNameHe}', '${changeSederTitle[sederName]}', ${perakimNumber}, ${mishnayosNumber});`)
       .then(()=>{
           console.log(`added ${masechtaName}`);   
           return  n < reorderedMasechtos.length - 1 && insertDetails(reorderedMasechtos, n + 1); 
        })}
        insertDetails(reorderedMasechtos, 0)
    }).finally(()=> client.end())
       
}


addMasechtaDetails();





   


