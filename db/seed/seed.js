const {pool, client} = require("../connection.js");
const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle, reorderMasechtaArray , reorderNestedArrays, removeApostraphe} = require("../utils/utlis");
const {getMishnaText} = require("../data/MasechtaDetails")
const chapterIndex = require("../data/chapterIndex.json") 
const reorderedMasechtos = reorderMasechtaArray(masechtaDetails, "masechtaId");
const reorderedIndex = reorderNestedArrays(chapterIndex, "masechtaId");   

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
        const insertMasechtaIndex =(n)=>{
            console.log(n)
             const masechtaInfo = reorderedIndex[n];
             const {masechtaName, masechtaId } = masechtaInfo[0];
             const masechtaArr = [];
          masechtaInfo.forEach((perek)=>{
           
              const {chapter, numOfMishnyosInTexts} = perek;
              for (let i = 1; i <= numOfMishnyosInTexts; i++){
                masechtaArr.push([chapter, i]);
              }
          })
         console.log(`starting ${masechtaName} `);
          const insertMishnaIndex =(x , name , id) =>{
            return pool.query(`INSERT INTO mishna_table 
            (masechta_id, masechta_name, perek_number , mishna_number) 
            VALUES 
            (${id}, '${name}', ${masechtaArr[x][0]}, ${masechtaArr[x][1]});`
            )
            .then(()=>{
                console.log(`indexed ${name} , chapter: ${masechtaArr[x][0]}, mishna: ${masechtaArr[x][1]}`);
             return  x < masechtaArr.length - 1 && insertMishnaIndex(x + 1, masechtaName, masechtaId);
            })
          }
          insertMishnaIndex(0, masechtaName, masechtaId ).then(()=>{
            console.log(`finished ${masechtaName}`)
            return n < reorderedIndex.length - 1 ? insertMasechtaIndex(n + 1) : insertMishnaText(); 
        })
        } 
    insertMasechtaIndex(0);
    })
    
}


const insertMishnaText = () =>{
    return pool.connect()
    .then(()=> pool.query("SELECT mishna_id FROM mishna_table;"))
    .then((res)=>{
        const rows = res.rows.length;
        const insertByChapter =(n)=>{
            return pool.query(`SELECT * FROM mishna_table where mishna_id = ${n};`)
            .then((res)=>{
                const {mishna_id, perek_number, mishna_number, masechta_name} = res.rows[0];
                getMishnaText(masechta_name, perek_number, mishna_number)
                .then((res)=>{
                    const {mishna_text_eng, mishna_text_he} = res;
                    return pool.query(`UPDATE mishna_table SET mishna_text_he='${removeApostraphe(mishna_text_he)}', mishna_text_eng='${removeApostraphe(mishna_text_eng)}' WHERE mishna_id = ${mishna_id};`) 
                }).then(()=>{
                    console.log(`added text for ${masechta_name}, chapter: ${perek_number}, mishna: ${mishna_number}`);
                    return n < rows  && insertByChapter(n + 1);
                })
                
            })
            
        }
        insertByChapter(1);
    })
}


runSeed();








   


