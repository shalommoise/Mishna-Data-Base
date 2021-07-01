const {pool, client} = require("../connection.js");

const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle } = require("../utils/utlis");




const addMasechtaDetails = (masechtos, n)=>{ 

     const {masechtaId,masechtaName, masechtaNameHe, sederName, perakimNumber, mishnayosNumber } = masechtos[n]
    return pool.connect()
       .then(()=>client.query(`INSERT INTO masechta_table 
       (masechta_id, masechta_name, masechta_name_he, seder_name, number_of_perakim, number_of_misnayos) 
       VALUES
       (${masechtaId} ,'${masechtaName}', '${masechtaNameHe}', '${changeSederTitle[sederName]}', ${perakimNumber}, ${mishnayosNumber});`))
       .then(()=>{
           console.log(`added ${masechtaName}`);   
           client.release()
           return  n < masechtos.length && addMasechtaDetails(masechtos, n + 1);          
        }).catch((err)=>{
            console.log(err)
        })
}


addMasechtaDetails(masechtaDetails, 0);
// addMasechtaDetails(masechtaDetails, 9);
// addMasechtaDetails(masechtaDetails, 18);
// addMasechtaDetails(masechtaDetails, 27);
// addMasechtaDetails(masechtaDetails, 36);
// addMasechtaDetails(masechtaDetails, 45);
// addMasechtaDetails(masechtaDetails, 54);




   


