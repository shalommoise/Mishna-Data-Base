exports.restrictTitle = (oldTitle) =>{
    const titleArr = oldTitle.split(" ");
titleArr.shift();
const newTitle = titleArr.join(" ");
return newTitle;
}

exports.changeSederTitle = {
    
    Zeraim: "Zeraim", 
    Moed: "Moed",
    Nashim: "Nashim",
    Nezikin: "Nezikin",
    Kodashim: "Kodshim",
    Tahorot: "Taharos"
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

exports.reorderNestedArrays =(arr , id)=>{
    if(!arr||!arr.length) return [];
  const  reorderArr = arr.map(()=>[]);
    arr.forEach((obj)=>{
        reorderArr[obj[id]].push(obj);
    }) 
    reorderArr.shift();
    const answerArr = reorderArr.filter((arr)=> arr.length > 0);
    return answerArr;
}


exports.removeApostraphe =(text)=>{
    if(!text||!text.length) return '';
    const newText = text.replace(/'/g, '"');
    return newText;
  }
  
  exports.addApostraphe =(text)=>{
   if(!text||!text.length) return '';
    const newText = text.replace(/"/g, "'");
     return newText;
  }

 exports.altMasechtaNames = {
 Berakhot : "Brachos",
  Peah : "Peah", 
  Demai : "Demai",
 Kilayim : "Kilayim",
  Sheviit : "Sheviis",
 Terumot : "Terumos",
 Maasrot : "Maasros",
 "Maaser Sheni" : "Maaser Sheni",
 Challah : "Challah",
 Orlah : "Orlah",
 Bikkurim : "Bikkurim",
 Shabbat : "Shabbos",
 Eruvin : "Eiruvin",
 Pesachim : "Pesachim",
 Shekalim : "Shekalim",
 Yoma : "Yuma",
 Sukkah : "Sukka",
 Beitzah : "Beitza",
 "Rosh Hashanah" : "Rosh Hashana",
 Taanit : "Taanis",
 Megillah : "Megilla",
 "Moed Katan" : "Moed Katan",
 Chagigah : "Chagiga",
 Yevamot : "Yevamos",
 Ketubot : "Kesubos",
 Nedarim : "Nedarim",
 Nazir : "Nazir",
 Sotah : "Sotah",
 Gittin : "Gittin",
 Kiddushin : "Kiddushin",
 "Bava Kamma" : "Bava Kama",
 "Bava Metzia" : "Bava Metzia",
"Bava Batra" : "Bava Basra",
 Sanhedrin : "Sanhedrin",
 Makkot : "Makkos",
 Shevuot : "Shavuos",
 Eduyot : "Eduyos",
 "Avodah Zarah" : "Avoda Zara",
 "Pirkei Avot" : "Avos",
 Avot : "Avos",
 Horayot : "Horiyos",
 Zevachim : "Zevachim",
 Menachot : "Menachos",
 Chullin : "Chullin",
 Bekhorot : "Bechoros",
 Arakhin : "Erchin",
 Temurah : "Temura",
 Keritot : "Krisos",
 Meilah : "Meilla",
 Tamid : "Tamid",
 Middot : "Midos",
 Kinnim : "Kinnim",
 Kelim : "Keilim",
 Oholot : "Ohalos",
 Negaim : "Negaim",
 Parah : "Parah",
 Tahorot : "Taharos",
 Mikvaot : "Mikvaos",
 Niddah : "Niddah",
 Makhshirin : "Machshirin",
 Zavim : "Zavim",
 "Tevul Yom" : "Tevul Yom",
 Yadayim : "Yadayim",
 Oktzin: "Uktzin"
  }

exports.switchAltName = (obj)=>{
    const entries = Object.entries(obj);
    
    const newObj = {};
    entries.forEach((entry)=>{
        newObj[entry[1]] = entry[0]  
    })
    return newObj;
}

exports.linkToTitle = (link)=>{
    if(!link) return "";
    const arr = link.split("/");
    const withMp3 = arr[arr.length-1];
    const titleArr = withMp3.split(".");
    titleArr.pop();

    const prepTitle = titleArr.join(":");

    const titleWithGaps = prepTitle.split("-");
   if(titleWithGaps.length === 2) {

       const addStop = titleWithGaps.join("-");
   
    return addStop.split("_").join(" ");
    };
  
    titleWithGaps.splice(1, 0 ," ");
    titleWithGaps.splice(3, 0 ,"-")
    const title = titleWithGaps.join("");
    return title;

}

exports.changeMasechtaNames = (arr, altNames)=> {
    return arr.map((masechta)=>{
    const copy = {...masechta}
    copy.masechta_name = altNames[copy.masechta_name]
    return copy;
})}

exports.changefirstLetterToUpperCase =(str)=>{
    if(!str) return "";
    const arr = str.split("");
    const firstLetter = arr.shift();
    const captilised = firstLetter.toUpperCase();
    arr.unshift(captilised);
    const finalStr = arr.join("");
    return finalStr;
}