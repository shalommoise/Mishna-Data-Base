const {reorderMasechtaArray} = require("../db/utils/utlis");

describe("reorderMasechtaArray", ()=>{
    test("returns empty array", ()=>{
       expect(reorderMasechtaArray([])).toEqual([]);
       expect(reorderMasechtaArray('')).toEqual([]);
       expect(reorderMasechtaArray()).toEqual([]);
    })
})