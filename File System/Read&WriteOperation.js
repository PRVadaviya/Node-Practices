const fs = require('fs')

console.log("start");

//async
const afile = fs.readFile("data.txt",'utf8',(err,data)=>{
     console.log("async",data);
})
console.log("end1");

//sync
const sfile = fs.readFileSync("data.txt",'utf8')
console.log("sync",sfile);

console.log("end2");




//same way writefile and writefilesync
console.log("start");

//async
fs.writeFile("write.txt","Write Operation!!!",(err)=>{
     
     if(err)
          console.log(err);

     console.log("Sucessfull!!!!!");
})
console.log("end1");

//sync
fs.writeFileSync("write.txt","Write Operation!!!")
console.log("sync");

console.log("end2");
