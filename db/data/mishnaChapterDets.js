const fs =require('fs');

const masechtaDetails = require('./mishnaIndex.json')
const {getMishnaText}= require("./MasechtaDetails")
const {reorderMasechtaArray} = require("../utils/utlis")

const mishnaChapterIndex =[];
const reorderedMasechtos = reorderMasechtaArray(masechtaDetails, "masechtaId");
reorderedMasechtos.forEach((masechta,i)=>{
    const {masechtaName,perakimNumber, mishnayosNumber, masechtaId} = masechta;
    const getMishnaByMasechta =(chapter)=> {
        getMishnaText(masechtaName, chapter, 1)
        .then((res)=>{
            const {numOfMishnyosInTexts} = res
      const chapterObj = {masechtaName, chapter ,numOfMishnyosInTexts, masechtaId }
      
          mishnaChapterIndex.push(chapterObj);
        }).then(()=>{
            return chapter <= perakimNumber && getMishnaByMasechta(chapter + 1) 
        }) .then(()=>{
            const str = JSON.stringify(mishnaChapterIndex)
            fs.writeFile("db/data/chapterIndex.json",str, (err) => {
                if (err) throw err;
                console.log(`Added ${masechtaName}, chapter: ${perakimNumber}`);
            })
          })
        
    }
    getMishnaByMasechta(1)
})
 

