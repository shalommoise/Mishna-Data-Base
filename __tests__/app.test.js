const request = require("supertest");
const app = require("../app");
const {resetSiyum} = require("../db/seed/resetSiyums");
const {checkIfFinished} = require("../models/updates.models")
describe("/api", ()=>{
//  beforeEach(()=>resetSiyum())
    describe("/sedarim/", ()=>{
        
        test("200 GET list of sedarim", ()=>{
            return request(app)
            .get("/api/sedarim/")
            .expect(200)
            .then((res)=>{
                const {sedarim} = res.body;
                expect(sedarim[0].seder_name).toBe("Zeraim");
                expect(sedarim[1].seder_name).toBe("Moed");
                expect(sedarim[2].seder_name).toBe("Nashim");
                expect(sedarim[3].seder_name).toBe("Nezikin");
                expect(sedarim[4].seder_name).toBe("Kodshim");
                expect(sedarim[5].seder_name).toBe("Taharos");
            })
        })
        test("200 GET list of masechtos by Each Seder", ()=>{
            return request(app)
            .get("/api/sedarim/Zeraim")
            .expect(200)
            .then((res)=>{
                const {masechtos} = res.body;
                expect(masechtos[0].masechta_name).toBe("Brachos");
                expect(masechtos.length).toBe(11);
                const filter = masechtos.filter((masechta)=>masechta.seder_name = "Zeraim");
                expect(filter.length).toBe(11);
            })
        })
        test("200 GET list of masechtos by Each Seder - handle lowercase", ()=>{
            return request(app)
            .get("/api/sedarim/moed")
            .expect(200)
            .then((res)=>{
                const {masechtos} = res.body;
                expect(masechtos[0].masechta_name).toBe("Shabbos");
                expect(masechtos.length).toBe(12);
                const filter = masechtos.filter((masechta)=>masechta.seder_name = "Zeraim");
                expect(filter.length).toBe(12);
            })
        })
    })
    describe("/masechtos", ()=>{
        test("200 GET masechtos", ()=>{
            return request(app)
            .get("/api/masechtos")
            .expect(200)
            .then((res)=>{
                const {masechtos} = res.body;
                expect(masechtos[0].masechta_name).toBe("Brachos");
                expect(masechtos.length).toBe(63)
            })
        })
        test("200 GET single Masechta", ()=>{
            return request(app)
            .get("/api/masechtos/Shekalim/summary/")
            .expect(200)
            .then((res)=>{
               
                const {masechta} = res.body;
                expect(masechta.masechta_name).toBe("Shekalim");
                expect(masechta.number_of_perakim).toBe(8);
                expect(masechta.number_of_misnayos).toBe(52)
            })
        })
        test("200 GET single Masechta - use alt name", ()=>{
            return request(app)
            .get("/api/masechtos/brachos/summary/")
            .expect(200)
            .then((res)=>{
               
                const {masechta} = res.body;
                expect(masechta.masechta_name).toBe("Brachos");
                expect(masechta.number_of_perakim).toBe(9);
                expect(masechta.number_of_misnayos).toBe(57)
            })
        })
        
        test("200 GET mishnayos of a single masechta", ()=>{
            return request(app)
            .get("/api/masechtos/kilayim/mishnayos/")
            .expect(200)
            .then((res)=>{
                const {mishnayos} = res.body;
                expect(mishnayos.length).toBe(77);
                expect(mishnayos[76].perek_number).toBe(9);
                mishnayos.forEach((mishna)=>{
                    expect(mishna.masechta_name).toBe("Kilayim")
                })
            })


        })
        test("200 GET Mishnayos from a single perek", ()=>{
            return request(app)
            .get("/api/masechtos/menachos/mishnayos?perek=2")
            .expect(200)
            .then((res)=>{
                const {mishnayos} = res.body;
                expect(mishnayos.length).toBe(5);
              
                mishnayos.forEach((mishna)=>{
                    expect(mishna.masechta_name).toBe("Menachos");
                    expect(mishna.perek_number).toBe(2);
                })
            })

        })
        test("200 GET Mishnayos from a single mishna", ()=>{
            return request(app)
            .get("/api/masechtos/menachos/mishnayos?perek=2&mishna=3")
            .expect(200)
            .then((res)=>{
                const {mishnayos} = res.body;
                expect(mishnayos.length).toBe(1);
              
              
                    expect(mishnayos[0].masechta_name).toBe("Menachos");
                    expect(mishnayos[0].perek_number).toBe(2);
                    expect(mishnayos[0].mishna_number).toBe(3);
            
            })

        })
        
    
    })
    describe("/mishnayos", ()=>{
        test("200 GET mishna by mishna_id", ()=>{
            return request(app)
            .get("/api/mishnayos/?start=6")
            .expect(200)
            .then((res)=>{
                const {mishnayos} = res.body;
                expect(mishnayos.length).toBe(1);
                expect(mishnayos[0].masechta_name).toBe("Brachos");
                expect(mishnayos[0].perek_number).toBe(2);
                expect(mishnayos[0].mishna_number).toBe(1);
            })
        })
        test("200 GET mishna by mishna_id", ()=>{
            return request(app)
            .get("/api/mishnayos/?start=6&end=9")
            .expect(200)
            .then((res)=>{
                const {mishnayos} = res.body;
                expect(mishnayos.length).toBe(4);
                expect(mishnayos[0].masechta_name).toBe("Brachos");
                expect(mishnayos[0].perek_number).toBe(2);
                expect(mishnayos[0].mishna_number).toBe(1);
                expect(mishnayos[3].perek_number).toBe(2);
                expect(mishnayos[3].mishna_number).toBe(4);
            })
        })
    })
    describe("/shiurim", ()=>{
        test("200 GET shiur by shiur_id", ()=>{
            return request(app)
            .get("/api/shiurim/7")
            .expect(200)
            .then((res)=>{
                const {shiur} = res.body;
                expect(shiur.shiur_title).toBe("Brachos 4:6-5:2");
            })
        })
    })
  describe("/siyumim", ()=>{
        // beforeEach(()=>resetSiyum())
        test("201 POST siyum admin ", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Shalom",
                admin_sname: "Moise",
                siyum_name: "Yitzchak Ben Avraham",
                finish_date: "30/08/2021"
            })
            .expect(201)
            .then((res)=>{
                const {siyumDetails} = res.body;
                const { admin_email,
                admin_fname,
                admin_sname,
                siyum_name ,
                finish_date} = siyumDetails;
                expect(admin_email).toBe("mshalom689@gmail.com");
                expect(admin_fname).toBe("Shalom");
                expect(admin_sname).toBe("Moise");
                expect(siyum_name).toBe("Yitzchak Ben Avraham");
                expect(finish_date).toBe("30/08/2021");
            })
        })
        test("200 GET ALL siyumim with isopen = true", ()=>{
           
            return request(app)
            .get("/api/siyumim/")
            .expect(200)
            .then((res)=>{
                const {siyumim} = res.body;
            expect(siyumim.length > 0).toBe(true)
                siyumim.forEach((siyum)=>{
                    expect(siyum.isopen).toBe(true)
                })
          
                })
              })
        test("200 GET TABLE for siyum", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Shalom",
                admin_sname: "Moise",
                siyum_name: "Yitzchak Ben Avraham",
                finish_date: "30/08/2021"
            })
            .expect(201)
            .then(()=>{
                return request(app)
                .get("/api/siyum/1")
                .expect(200)
            })
        })
        //
        test("201 POST sign up for a Masechta", ()=>{
            return request(app)
            .post("/api/siyum/1") 
            .send({
                user_email: "mshalom689@gmail.com",
                user_fname: "Shalom",
                user_sname: "Moise",
                masechta: "Eiruvin"
            })
            .expect(201)
            .then((res)=>{
                const {user_email, user_fname, user_sname, masechta} = res.body.user.userDetails;
                
                expect(user_email).toBe("mshalom689@gmail.com");
                expect(user_fname).toBe("Shalom");
                expect(user_sname).toBe("Moise");
                expect(masechta).toBe("Eiruvin");
            })
        })
        test("200 GET admin details by admin_id", ()=>{
            return request(app)
            .get("/api/siyumim/1")
            .expect(200)
            .then((res)=>{
                const {siyumAdmin} = res.body;
                expect(siyumAdmin.admin_fname).toBe("Shalom");
                expect(siyumAdmin.admin_id).toBe(1);
            })
        })
        test("201 PATCH siyum makers table isOpen from false to true", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Eli",
                admin_sname: "Goldin",
                siyum_name: "שלמה בן דוד",
                finish_date: "14/08/2021",
                isopen: "false"
            }).expect(201)
            .then((res)=>{
               const {admin_id, isopen} = res.body.siyumDetails;
               const notOpen = isopen;
               expect(notOpen).toBe("false")
               return request(app)
               .patch(`/api/siyumim/${admin_id}`)
               .send({isopen: true})
               .expect(201)
               .then((res)=>{
          
                  const open = res.body.siyumDetails.isopen;
                  const id = res.body.siyumDetails.admin_id;

                  expect(admin_id).toBe(id)
                  expect(open).not.toBe(notOpen)
                  expect(open).toBe("true")
               })
            })
        })
        
        test("201 POST siyum makers with message", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Eli",
                admin_sname: "Goldin",
                siyum_name: "שלמה בן דוד",
                finish_date: "14/08/2021",
                isopen: "false",
                msg: "Hi everyone, thanks for signing up"
            }).expect(201)
            .then((res)=>{
                const {msg} = res.body.siyumDetails;
                expect(msg).toBe("Hi everyone, thanks for signing up")
            })
            
        })
        test("201 PATCH email send daily reminders", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Shalom",
                admin_sname: "Moise",
                siyum_name: "Benjamin ",
                finish_date: "30/08/2021"
            }).then((res)=>{
                const {admin_id} = res.body.siyumDetails;
                return request(app)
                .post(`/api/siyum/${admin_id}`) 
                .send({
                    user_email: "mshalom689@gmail.com",
                    user_fname: "Shalom",
                    user_sname: "Moise",
                    masechta: "Eiruvin"
                })
                .expect(201)
                .then((res)=>{
                  
                    const {user_id, reminder} = res.body.user.userDetails;
                    const oldReminder = reminder;
                    return request(app)
                    .patch(`/api/siyum/${admin_id}`)
                    .send({reminder: "daily", user_id})
                    .expect(201).then((res)=>{
                        const {userDetails} = res.body;
                        expect(userDetails.reminder).not.toBe(oldReminder)
                        expect(userDetails.reminder).toBe("daily")
                    })
                    
                })
            })
            
           
        })
      
        test("201 PATCH daiy check to see if siyum should be live or not", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Shalom",
                admin_sname: "Moise",
                siyum_name: "Test case",
                finish_date: "10/08/2021"
            })
            .then((res)=>{
              
                const {siyumDetails} = res.body;
               const {admin_id, isopen} = siyumDetails;
               expect(isopen).toBe("true");
               const old = isopen;                         
                  return {admin_id, old}
                }).then((res)=>{     
                    const {admin_id, old} = res; 
                    return checkIfFinished().then(()=>{
                        return request(app)
                        .get(`/api/siyumim/${admin_id}`)
                        .expect(200)
                        .then((res)=>{
                    
                   
                    const {siyumAdmin} = res.body;
                    const {isopen} = siyumAdmin;
                    expect(isopen).not.toBe(old);
                    expect(isopen).toBe("false")
                  
                          
                       })
                    })
                          
                   
                
            })
        })
        
        test("201 POST sign up for a Masechta: figure out mishna start and end", ()=>{
            return request(app)
            .post("/api/siyum/1") 
            .send({
                user_email: "mshalom689@gmail.com",
                user_fname: "Shalom",
                user_sname: "Moise",
                masechta: "Brachos"
            })
            .expect(201)
            .then((res)=>{
                const {user_email, user_fname, user_sname, masechta, start_mishna, end_mishna} = res.body.user.userDetails;
 
                expect(user_email).toBe("mshalom689@gmail.com");
                expect(user_fname).toBe("Shalom");
                expect(user_sname).toBe("Moise");
                expect(masechta).toBe("Brachos");
                expect(start_mishna).toBe(1);
                expect(end_mishna).toBe(57);
            })
        })

        test("201 POST sign up for a Masechta: figure out masechta from mishna_id", ()=>{
            return request(app)
            .post("/api/siyum/1") 
            .send({
                user_email: "mshalom689@gmail.com",
                user_fname: "Shalom",
                user_sname: "Moise",
                start_mishna: 1,
                end_mishna: 57
            })
            .expect(201)
            .then((res)=>{
                const {user_email, user_fname, user_sname, masechta, start_mishna, end_mishna} = res.body.user.userDetails;
 
                expect(user_email).toBe("mshalom689@gmail.com");
                expect(user_fname).toBe("Shalom");
                expect(user_sname).toBe("Moise");
                expect(masechta).toBe("Brachos");
                expect(start_mishna).toBe(1);
                expect(end_mishna).toBe(57);
            })
        })
    })
})