const fs = require('fs');

//Reading JSON File
fs.readFile("data.json",(err,data)=>{
     if(err){
          console.log("Error");
          return ;
     }

     const jsonData = JSON.parse(data);      // convert JSON string → JS object
     console.log(jsonData);
})


//Writting JSON File
const obj = {
     "name": "Pratik",
     "Skill" : ["NodeJS","React"]
}

fs.writeFile("data.json",JSON.stringify(obj,null,2),(err)=>{
     if (err) throw err;
     
     console.log("JSON file saved");
})


//Updating JSON
fs.readFile("data.json","utf8",(err,data)=>{
     if (err) throw err;
     const jsonData = JSON.parse(data);

     jsonData.age = "20"
     jsonData.city = "morbi"
     console.log(jsonData);
     
     fs.writeFile("data.json",JSON.stringify(jsonData,null,2),(err)=>{
          if (err) throw err;
     })
})


//deleting JSON
fs.readFile("data.json","utf8",(err,data)=>{
     if (err) throw err;

     let obj = JSON.parse(data)
     obj = obj.filter((item)=>item.name === "Pratik")
     console.log(obj);
     
     fs.writeFile("data.json",JSON.stringify(obj,null,2),()=>{
          console.log("deleted User");
     })
})