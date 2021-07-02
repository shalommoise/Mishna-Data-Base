const fs =require('fs');

const masechtaDetails = require('./mishnaIndex.json')
const {getMishnaText}= require("./MasechtaDetails")


const mishnaIndex =[];

masechtaDetails.forEach((masechta)=>{
    const {masechtaName,perakimNumber, mishnayosNumber} = masechta;
  console.log(masechtaName, perakimNumber, mishnayosNumber)
//     getMishnaText(name)
//   .then((res)=>{
// console.log(res)
//     // mishnaIndex.push(res);
//   })
//   .then(()=>{
//     const str = JSON.stringify(mishnaIndex)
//     fs.writeFile("db/data/chapterIndex.json",str, (err) => {
//         if (err) throw err;
//         console.log("The file was succesfully saved!");
//     })
//   })
});

