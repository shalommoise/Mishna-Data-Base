const {pool, client} = require("../connection.js");
const masechtaDetails = require("../data/mishnaIndex.json");
const {changeSederTitle, reorderMasechtaArray , reorderNestedArrays, removeApostraphe, altMasechtaNames} = require("../utils/utils");
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
                    return n < rows  && insertByChapter(n + 1) ;
                })
                
            })
            
        }
        insertByChapter(1)
        .then(()=>shiurimDatabase());
    })
}


const shiurimDatabase = ()=>{
    return pool.connect()
    .then(()=>{
    
        const mishnayosBySeder = {}
        reorderedMasechtos.forEach((masechta)=>{
            mishnayosBySeder[masechta["sederName"]] ? mishnayosBySeder[masechta["sederName"]].push(masechta) :   mishnayosBySeder[masechta["sederName"]] = [masechta]
        })
        const sedarim = Object.keys(changeSederTitle);     
        const insertBySeder = (i)=>{
            const seder = sedarim[i];
            const mishnayos = []
            const insertByMasechta = (x)=>{
                return pool.query(`SELECT mishna_id, masechta_name, perek_number, mishna_number FROM mishna_table WHERE masechta_name='${mishnayosBySeder[seder][x].masechtaName}' ORDER BY mishna_id;`)
                .then((res)=>{
            res.rows.forEach((mishna)=>{mishnayos.push(mishna)});
            return x < mishnayosBySeder[seder].length- 1 && insertByMasechta(x+1);
                })
                
            }
           
            insertByMasechta(0)
            .then(()=>{
                insertShiur(mishnayos, 0)
                .then(()=>{
                    console.log(`finished adding shiurim for Seder ${seder}`)
                    return i < sedarim.length - 1 && insertBySeder(i + 1);
                })
            })
            
       
        }
        insertBySeder(0)
           const insertShiur = (arr, n)=>{
               if(!arr[n]) return "finished";
               const firstMishna = arr[n];  
   const uniqueCase =  firstMishna.masechta_name === "Maaser Sheni" && firstMishna.perek_number === 1 && firstMishna.mishna_number === 7;
let lastMishna = arr[n+3] ? arr[n+3] : arr[n+2] ? arr[n+2] : arr[n+1] ? arr[n+1]: arr[n];
if(uniqueCase) lastMishna = arr[n+2];
let title = `${altMasechtaNames[firstMishna.masechta_name]} ${firstMishna.perek_number}:${firstMishna.mishna_number}-${lastMishna.perek_number}:${lastMishna.mishna_number}`;
if(firstMishna.masechta_name !== lastMishna.masechta_name) title = `${altMasechtaNames[firstMishna.masechta_name]} ${firstMishna.perek_number}:${firstMishna.mishna_number}-${altMasechtaNames[lastMishna.masechta_name]} ${lastMishna.perek_number}:${lastMishna.mishna_number}`;
if(firstMishna.mishna_id === lastMishna.mishna_id) title = `${altMasechtaNames[firstMishna.masechta_name]} ${firstMishna.perek_number}:${firstMishna.mishna_number}`;
return pool.query(`INSERT INTO shiurim_table (start_mishna, end_mishna, number_of_mishnayos, shiur_title)
                                      VALUES (${firstMishna.mishna_id}, ${lastMishna.mishna_id}, ${lastMishna.mishna_id - firstMishna.mishna_id + 1}, '${title}');`)
                                      .then(()=>{
                                          console.log(`added ${title}`);
                                          if(uniqueCase) return insertShiur (arr, n + 3);
                                          else return n < arr.length - 1 && insertShiur (arr, n + 4);
                                      })
}
    })
       
    
}

runSeed();


