exports.restrictTitle = (oldTitle) =>{
    const titleArr = oldTitle.split(" ");
titleArr.shift();
const newTitle = titleArr.join(" ");
return newTitle;
}

exports.changeSederTitle = {
    Tahorot: "Taharos",
    Zeraim: "Zeraim",
    Moed: "Moed",
    Nashim: "Nashim",
    Kodashim: "Kodshim",
    Nezikin: "Nezikin"
}

exports.reorderMasechtaArray = (arr, id)=>{
    
    if(!arr||!arr.length) return [];
    const reorderArr = [];
    reorderArr.length = arr.length;
if(id) {
    arr.forEach((obj) => {
         const index = obj[id]
        reorderArr.splice(index, 1, obj);
     });
} else {
    arr.forEach((num) => {
        const index = num;
        reorderArr.splice(index, 0, num);
       
    });
       }
    const answerArr = reorderArr.filter((num)=> num!=="undefined");

    return answerArr;
}