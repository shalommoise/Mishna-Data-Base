exports.restrictTitle = (oldTitle) =>{
    const titleArr = oldTitle.split(" ");
titleArr.shift();
const newTitle = titleArr.join(" ");
return newTitle;
}