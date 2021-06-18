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
const {restrictTitle} = require("../utils/utlis");

const axiosInstance = axios.create({
    baseURL: "https://www.sefaria.org/api/",
  });
exports.getMishnaInfo =(mishnaName)=>{
    return axiosInstance
    .get(`/index/${mishnaName}`)
.then((mishna) => {
const {data} = mishna;
const {title, heTitle, categories, lengths }= data;
const mishnaObj = {}

mishnaObj.masechtaName = restrictTitle(title)
mishnaObj.masechtaNameHe = restrictTitle(heTitle);
mishnaObj.sederName = categories[1].split(" ")[1];
mishnaObj.perakimNumber = lengths[0];
mishnaObj.mishnayosNumber = lengths[1];
return mishnaObj;
    })
    .catch((err) => err);
}
