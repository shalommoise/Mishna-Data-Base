// use https://www.sefaria.org/api/index/Mishna%20Berakhot to get info of mishna index
// which masechta, how many perakim and mishnayos => lengths,
//heTitle
/* find which seder => "categories": [
"Mishnah",
"Seder Zeraim"
],*/

// use in for from mishna table to get numbers for Sedarim table


const mishnaNames = require("./mishnaNames.json");
const axios = require("axios");
const {restrictTitle, changeSederTitle} = require("../utils/utlis");

const axiosInstance = axios.create({
    baseURL: "https://www.sefaria.org/api",
  });
exports.getMishnaInfo =(mishnaName)=>{
    
    const p = new Promise((resolve, reject)=>{
        return axiosInstance
        .get(`/index/${mishnaName}`)
    .then((mishna) => {
    const {data} = mishna;
    
    const {title, heTitle, categories, lengths, order }= data;
    const mishnaObj = {}
    
    mishnaObj.masechtaName = restrictTitle(title)
    mishnaObj.masechtaNameHe = restrictTitle(heTitle);
    mishnaObj.sederName = changeSederTitle(categories[1].split(" ")[1]);
    mishnaObj.perakimNumber = lengths[0];
    mishnaObj.mishnayosNumber = lengths[1];
    mishnaObj.masechtaId = order[0];

    resolve(mishnaObj);
        })
        .catch((err) => err);
    })
  return p;
}
 exports.getMishnaText = (name, chapter, mishnaNumber) =>{
  const p = new Promise((resolve, reject)=>{
return axiosInstance
        .get(`/texts/Mishnah_${name}.${chapter}`).then((res)=>{
         const {data} = res;
        
          const mishnaObj ={}
          mishnaObj.perek_number = chapter;
          mishnaObj.mishna_number = mishnaNumber;
          mishnaObj.masechtaName = name;
          mishnaObj.mishna_text_he = data.he[mishnaNumber - 1];
          mishnaObj.mishna_text_eng = data.text[mishnaNumber - 1];
         resolve(mishnaObj);
 
        })
        .catch((err) => err);
      })
      return p;
}

