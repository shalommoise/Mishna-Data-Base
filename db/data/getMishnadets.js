const fs =require('fs');
const mishnaNames = require('./mishnaNames.json')

const {getMishnaInfo}= require("./MasechtaDetails")


const mishnaIndex =[];

mishnaNames.forEach((name)=>{
  
  getMishnaInfo(name)
  .then((res)=>{

    mishnaIndex.push(res);
  }).then(()=>{
    const str = JSON.stringify(mishnaIndex)
    fs.writeFile("db/data/mishnaIndex.json",str, (err) => {
        if (err) throw err;
        console.log("The file was succesfully saved!");
    })
  })
});






