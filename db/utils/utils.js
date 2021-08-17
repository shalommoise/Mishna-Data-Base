const restrictTitle = (oldTitle) =>{
    const titleArr = oldTitle.split(" ");
titleArr.shift();
const newTitle = titleArr.join(" ");
return newTitle;
}

const changeSederTitle = {
    
    Zeraim: "Zeraim", 
    Moed: "Moed",
    Nashim: "Nashim",
    Nezikin: "Nezikin",
    Kodashim: "Kodshim",
    Tahorot: "Taharos"
}

const reorderMasechtaArray = (arr, id)=>{
    
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

const reorderNestedArrays =(arr , id)=>{
    if(!arr||!arr.length) return [];
  const  reorderArr = arr.map(()=>[]);
    arr.forEach((obj)=>{
        reorderArr[obj[id]].push(obj);
    }) 
    reorderArr.shift();
    const answerArr = reorderArr.filter((arr)=> arr.length > 0);
    return answerArr;
}


const removeApostraphe =(text)=>{
    if(!text||!text.length) return '';
    const newText = text.replace(/'/g, '"');
    return newText;
  }
  
 const addApostraphe =(text)=>{
   if(!text||!text.length) return '';
    const newText = text.replace(/"/g, "'");
     return newText;
  }

 const altMasechtaNames = {
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

const switchAltName = (obj)=>{
    const entries = Object.entries(obj);
    
    const newObj = {};
    entries.forEach((entry)=>{
        newObj[entry[1]] = entry[0]  
    })
    return newObj;
}

const linkToTitle = (link)=>{
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

const changeMasechtaNames = (arr, altNames)=> {
    return arr.map((masechta)=>{
    const copy = {...masechta}
    copy.masechta_name = altNames[copy.masechta_name]
    return copy;
})}

const formatMishnayos = (arr, altNames)=> {
    return arr.map((masechta)=>{
    const copy = {...masechta}
    copy.masechta_name = altNames[copy.masechta_name];
    copy.mishna_text_he = addApostraphe(copy.mishna_text_he)
    copy.mishna_text_eng = addApostraphe(copy.mishna_text_eng)
    return copy;
})}

const changefirstLetterToUpperCase =(str)=>{
    if(!str) return "";
    const arr = str.split("");
    const firstLetter = arr.shift();
    const captilised = firstLetter.toUpperCase();
    arr.unshift(captilised);
    const finalStr = arr.join("");
    return finalStr;
}

const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const getDate =()=>{
    
    const fullDate = Date();
    const arr = fullDate.split(" ");
    const [weekday, month, day, year] = arr;
    const monthEng = month;
  
    let monthNum = months.indexOf(monthEng);
    if(monthNum < 10) monthNum = "0" + monthNum;
    const todaysDate = `${day}/${monthNum}/${year}`;
 
    return todaysDate;
}

const addDatesToNum =(date)=>{
    
    const arr = date.split("/")

     const reverseArr = [];
    arr.forEach((num)=>reverseArr.unshift(num));
    return Number(reverseArr.join(""));
 }

const isSiyumLive = (todaysDate, finishDate) =>{
    if(!todaysDate || !finishDate) throw new Error("Err: You must provide both dates"); 
   const todaysDateToNum = addDatesToNum(todaysDate);
   const finishDateToNum = addDatesToNum(finishDate); 
 return finishDateToNum >= todaysDateToNum;
}
const convertToEpoch = (date)=>{
   
    const arr = date.split("/")
    const shortYear = arr.pop();
    const fullYear = "20" + shortYear;
    arr.push(fullYear);
    const americanDateArr = [arr[1], arr[0], arr[2]];
    const americanDate = americanDateArr.join("/");
    const newDate = new Date(americanDate +" 01:00")
    const epoch = newDate.getTime();
    return epoch ;
}
const daysLeft = (start, end)=>{
    if(!start || !end) throw new Error("Err: You must provide both dates"); 
 
    const epochStart = convertToEpoch(start);
    const epochEnd = convertToEpoch(end);
    return (epochEnd - epochStart)/86400000;
}

module.exports = {addApostraphe, restrictTitle, changeSederTitle, reorderMasechtaArray, reorderNestedArrays,
    removeApostraphe, altMasechtaNames, switchAltName, linkToTitle, changeMasechtaNames, formatMishnayos,
    changefirstLetterToUpperCase, getDate, isSiyumLive, daysLeft, convertToEpoch}