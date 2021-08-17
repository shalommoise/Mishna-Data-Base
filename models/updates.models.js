const {pool, client} = require("../db/connection");
const  {isSiyumLive, getDate} = require("../db/utils/utils")

exports.checkIfFinished =()=>pool.query("SELECT admin_id, date_made , isopen  FROM siyum_makers;")
                               .then((res)=>{
                        //    console.log(res.rows)
                                   const ended = res.rows.filter((siyum)=> siyum.isopen === "true" && isSiyumLive(getDate(), siyum.date_made));
                                            //   console.log(ended)                      
                                  return closeSiyum(0, ended)
                               }).catch((err)=>console.log(err))

const closeSiyum = (siyumIndex, arr)=>{
                    return pool.query(`UPDATE siyum_makers SET isopen = false WHERE admin_id=${arr[siyumIndex].admin_id} RETURNING *;`)
                                  .then(()=> siyumIndex < arr.length - 1  && closeSiyum(siyumIndex + 1, arr)).catch((err)=>console.log(err))}