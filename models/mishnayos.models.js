const {pool, client} = require("../db/connection");
const {altMasechtaNames, changeMasechtaNames, switchAltName} = require("../db/utils/utils");



exports.sendMultipleMishnayos = (masechta, perek, mishna)=>pool.connect()
.then(()=>{
    const checkifAltName = Object.keys(altMasechtaNames).some((name)=>name===masechta);
    const masechtaName = checkifAltName ? masechta : switchAltName(altMasechtaNames)[masechta];
    let query =  '';
    if(perek) query = ` AND perek_number = ${perek}`;
    if(mishna) query = ` AND perek_number = ${perek} AND mishna_number = ${mishna}`;

    return pool.query(`SELECT * FROM mishna_table WHERE masechta_name='${masechtaName}' ${query};`)
})
.then((res)=>{
const {rows} = res;
const newRows = changeMasechtaNames(rows,altMasechtaNames)
return newRows;
})


exports.sendMishnayosById = (start, end)=>pool.connect()
        .then(()=>{
            if(!end) end = start;
            return pool.query(`SELECT * FROM mishna_table WHERE mishna_id BETWEEN ${start} AND ${end};`)
            .then((res)=>{
                const {rows} = res;
                const newRows = changeMasechtaNames(rows,altMasechtaNames)
                return newRows;
            })
        })
