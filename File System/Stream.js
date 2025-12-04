const fs = require('fs')

const readStream = fs.createReadStream("data.txt","utf-8")

readStream.on("data",(chunk)=>{
     console.log("new chunk:");
     console.log(chunk);
     
})

readStream.on("end",()=>{
     console.log("Finished Reading File..");
})