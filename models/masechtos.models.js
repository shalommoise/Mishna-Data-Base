const {pool, client} = require("../db/connection");
const {altMasechtaNames, changeMasechtaNames, switchAltName} = require("../db/utils/utils")
exports.sendMasechtosBySeder =(seder)=>pool.connect()
        .then(()=>pool.query(`SELECT * FROM masechta_table WHERE seder_name = '${seder}';`))
        .then((res)=>{
            const {rows} = res;
         
         const newRows = changeMasechtaNames(rows,altMasechtaNames)
           
              return newRows;
        })


exports.sendAllMasechtos =()=>pool.connect()
.then(()=>pool.query("SELECT * FROM masechta_table ORDER BY masechta_id;"))
.then((res)=>{
    const {rows} = res;
 const newRows = changeMasechtaNames(rows,altMasechtaNames);   
      return newRows;
})


exports.sendSingleMasechtaDetails =(masechta)=>{
    const checkifAltName = Object.keys(altMasechtaNames).some((name)=>name===masechta);
    const masechtaName = checkifAltName ? masechta : switchAltName(altMasechtaNames)[masechta];
   
    return pool.connect()
.then(()=>pool.query(`SELECT * FROM masechta_table WHERE masechta_name = '${masechtaName}'`))
.then((res)=>{
    const {rows} = res;
         
    const newRows = changeMasechtaNames(rows,altMasechtaNames)
      const [result] =  newRows;
         return result 
})
}
