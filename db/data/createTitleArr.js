const fs =require('fs');
const shiurimLinks = require("./shiurimLinks");
const {linkToTitle} = require("../utils/utils");

const titles = shiurimLinks.map((link)=>linkToTitle(link));
const str = JSON.stringify(titles)
            fs.writeFile("db/data/titles.json",str, (err) => {
                if (err) throw err;
                console.log("finished");
            })