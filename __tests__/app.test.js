const request = require("supertest");
const app = require("../app");

describe("/api", ()=>{

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
    describe.only("/siyumim", ()=>{
        test("201 POST siyum admin ", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Shalom",
                admin_sname: "Moise",
                siyum_name: "Yitzchak Ben Avraham",
                finish_date: "30/08/21"
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
                expect(finish_date).toBe("30/08/21");
            })
        })
        test("200 GET ALL siyumim with isOpen = true", ()=>{
            return request(app)
            .get("/api/siyumim/")
            .expect(200)
            .then((res)=>{
                const {siyumim} = res.body;
            expect(siyumim.length > 0).toBe(true)
                siyumim.forEach((siyum)=>{
                    expect(siyum.isOpen).toBe(true)
                })
            })
        })
        test.only("200 GET TABLE for siyum", ()=>{
            return request(app)
            .post("/api/siyumim/")
            .send({
                admin_email: "mshalom689@gmail.com",
                admin_fname: "Shalom",
                admin_sname: "Moise",
                siyum_name: "Yitzchak Ben Avraham",
                finish_date: "30/08/21"
            })
            .expect(201)
            .then(()=>{
                return request(app)
                .get("/api/siyumim/1")
                .expect(200)
            })
        })
    })
})