const axios = require("axios")

exports.gethebrewDate =(date )=>{
 

    const dateArr = date.split("/");
    const [day, month,year] = dateArr;

    return axios.get(`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`)
     .then(res => {
         const {hebrew} = res.data;
          return hebrew;
     });
}




