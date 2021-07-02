const {reorderMasechtaArray} = require("../db/utils/utlis");

describe("reorderMasechtaArray", ()=>{
    test("returns empty array", ()=>{
       expect(reorderMasechtaArray([])).toEqual([]);
       expect(reorderMasechtaArray('')).toEqual([]);
       expect(reorderMasechtaArray()).toEqual([]);
    })
    test("input array does not need chnaging", ()=>{
        const input = [1,2,3,4,5,6,7,8,9,10];
        expect(reorderMasechtaArray(input)).toEqual(input);
    })
    test("simple case needs changing", ()=>{
        const input = [3,2,1];
        const output = [1,2,3];
        expect(reorderMasechtaArray(input)).toEqual(output);
    })
})

