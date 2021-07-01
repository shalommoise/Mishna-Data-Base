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

exports.reorderMasechtaArray = (arr)=>{
    if(!arr||!arr.length) return [];
}