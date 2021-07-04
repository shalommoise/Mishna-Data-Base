const {reorderMasechtaArray, removeApostraphe, addApostraphe} = require("../db/utils/utlis");
const masechtaDetails = require("../db/data/mishnaIndex.json")
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

    test("big case", ()=>{
        const input = [17,32,54,67,2,1,9,0];
        const output = [0,1,2,9,17,32,54,67];
        expect(reorderMasechtaArray(input)).toEqual(output);
    })
    test("Objects", ()=>{
        const input = [
            {name: "James", id: 5}, 
            {name: "William", id:3},
            {name: "Sarah", id:1},
            {name: "Sam", id:4},
            {name: "Hannah", id:2}
        ];
        const output = reorderMasechtaArray(input, "id");
        expect(output[0].name).toBe("Sarah");
        expect(output[1].name).toBe("Hannah");
        expect(output[2].name).toBe("William");
        expect(output[3].name).toBe("Sam");
        expect(output[4].name).toBe("James");
    })
    test("mishnayos", ()=>{
        const output = reorderMasechtaArray(masechtaDetails, "masechtaId");
        expect(output[0].masechtaName).toBe("Berakhot");
        expect(output[1].masechtaName).toBe("Peah");
        output.forEach((details, index)=>{
            const {masechtaId} = details;
             expect(masechtaId).toBe(index + 1)
        })
    })
    test("not input mutation", ()=>{
        const input =  [
            {name: "James", id: 5}, 
            {name: "William", id:3},
            {name: "Sarah", id:1},
            {name: "Sam", id:4},
            {name: "Hannah", id:2}
        ];
        reorderMasechtaArray(input);
        expect(input).toEqual([
            {name: "James", id: 5}, 
            {name: "William", id:3},
            {name: "Sarah", id:1},
            {name: "Sam", id:4},
            {name: "Hannah", id:2}
        ])
    })
})


describe("removeApostraphe", ()=>{
    test('Empty strings returns empty string', () => {
      expect(removeApostraphe()).toBe('');
      expect(removeApostraphe('')).toBe('');
      expect(removeApostraphe([])).toBe('');
      expect(removeApostraphe({})).toBe('');
    });
    test('String with no apostaphe does not change', ()=>{
      const text = "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world."
      expect(removeApostraphe(text)).toBe(text);
    })
    test('String replaces apostraphe', () => {
       const text = "will This work. I don't know, we'll see.";
       const newText = "will This work. I don\"t know, we\"ll see.";
       expect(removeApostraphe(text)).toBe(newText);
    });
  })
  
  describe("addApostraphe", ()=>{
     test('Empty strings returns empty string', () => {
      expect(addApostraphe()).toBe('');
      expect(addApostraphe('')).toBe('');
      expect(addApostraphe([])).toBe('');
      expect(addApostraphe({})).toBe('');
    });
     test('String with no apostaphe does not change', ()=>{
      const text = "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world."
      expect(addApostraphe(text)).toBe(text);
    });
    test('String replaces apostraphe', () => {
       
       const text = "will This work. I don\"t know, we\"ll see.";
       const newText = "will This work. I don't know, we'll see.";
       expect(addApostraphe(text)).toBe(newText);
    });
  })