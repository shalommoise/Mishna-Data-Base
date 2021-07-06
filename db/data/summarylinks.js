const summaryLinksArr = [
    "https://time4torah.org/wp-content/uploads/2017/09/Brachos-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Peah-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Demai-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Kilayim-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Sheviis-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Terumos-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Maasros-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Maaser-Sheni-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Challah-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Orlah-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Bikkurim-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Shabbos-ALL-KEY-TERMS-SUMMARIES.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Eiruvin-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Pesachim-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Shekalim-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Yuma-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/sukka-summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Beitza-Summaries.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Rosh-Hashana-Summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Taanis-Summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Megilla-Summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Moed-Katan-Summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/10/Chagiga-Summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Yevamos-Booklet.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Maseches-Kesubos-Full-Summary-Booklet.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Nedarim_Summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Nazir_summary.pdf",
    "https://time4torah.org/wp-content/uploads/2017/09/Sotah_summary-1.pdf", 
    "https://time4torah.org/wp-content/uploads/2017/09/Gittin_summary.pdf", 
    "https://time4torah.org/wp-content/uploads/2017/09/Gittin_summary.pdf",
    "http://time4torah.org/wp-content/uploads/2017/09/Bava_kamma_Summary.pdf",
    "http://time4torah.org/wp-content/uploads/2017/09/Bava-Metzia-Summary.pdf"

];

const names = ["Berakhot","Peah","Demai","Kilayim","Sheviit","Terumot","Maasrot","Maaser Sheni","Challah","Orlah","Bikkurim","Shabbat","Eruvin","Pesachim","Shekalim","Yoma","Sukkah","Beitzah","Rosh Hashanah","Taanit","Megillah","Moed Katan","Chagigah","Yevamot","Ketubot","Nedarim","Nazir","Sotah","Gittin","Kiddushin","Bava Kamma","Bava Metzia"]


const summaryLinks = ()=>{
obj = {};
names.forEach((name,i)=>{
    obj[name] = summaryLinksArr[i]
});
return obj;
}

module.exports = summaryLinks;