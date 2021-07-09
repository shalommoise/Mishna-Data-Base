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
        // get mishnayos by masechta, by perek, by mishna
        //get shiurim by masechta
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
    })
})