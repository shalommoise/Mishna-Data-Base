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
    })
})