const {pool, client} = require("../connection.js");

const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle, reorderMasechtaArray } = require("../utils/utlis");
const {getMishnaText} = require("../data/MasechtaDetails")

const reorderedMasechtos = reorderMasechtaArray(masechtaDetails, "masechtaId");
const runSeed = ()=>{    
    
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
           return  n < reorderedMasechtos.length - 1 ? insertDetails(reorderedMasechtos, n + 1) : updateSederTable() ; 
        })}
        insertDetails(reorderedMasechtos, 0)
    })
    .finally(()=> client.end())
       
}

const updateSederTable = ()=>{
    const sedraim = Object.values(changeSederTitle)
    return pool.connect()
    .then(()=>{
       const updateSingleSeder =(n)=>{    
          return pool.query(`SELECT * FROM masechta_table WHERE seder_name ='${sedraim[n]}';`)
        .then((res)=>{

         const numberOfMasechtos = res.rows.length;
         let mishnayosNumber = 0;
         let perakimNumber = 0;
         res.rows.forEach((masechta)=>{
         const { number_of_perakim, number_of_misnayos}= masechta;
         mishnayosNumber += number_of_misnayos ;
         perakimNumber += number_of_perakim;
         })
         return pool.query(`UPDATE sedarim_table SET number_of_masechtos=${numberOfMasechtos}, number_of_perakim=${perakimNumber}, number_of_misnayos=${mishnayosNumber} WHERE seder_name ='${sedraim[n]}';`)
         .then(()=>{
             console.log(`updated ${Object.values(changeSederTitle)[n]}`)
             return n < sedraim.length - 1 ? updateSingleSeder(n + 1): setMishnayosTable();
         })
        })
       }
       updateSingleSeder(0)
});
}

const setMishnayosTable =()=>{

    return pool.connect()
    .then(()=>{
        const insertMishnaText =(reorderedMasechtos, n)=>{
            
            const {masechtaName, masechtaId, perakimNumber} = reorderedMasechtos[n];
            
            for (let chapter = 1; chapter <= perakimNumber; chapter++){
                let mishnayosInChapter = 1; 
                getMishnaText(masechtaName, chapter, mishnayosInChapter)
                .then((res)=>{
                   const {perakim_number, mishna_number, mishna_text_he, mishna_text_eng, numOfMishnyosInTexts} =res;
                   mishnayosInChapter = numOfMishnyosInTexts;
                });
            }
            
            // return pool.query(`INSERT INTO mishna_table () VALUES () WHERE `)
        }
    insertMishnaText(reorderedMasechtos, 0)
    })
    
}


runSeed();








   


