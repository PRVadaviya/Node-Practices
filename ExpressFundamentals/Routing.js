const express = require('express');
const app = express();

//URL Parameter
//http://localhost:2025/user/100
app.get('/user/:id',(req,res)=>{
     const userId = req.params.id ;
     console.log(userId);
     res.send(`User ID is ${userId}`);
})

//Query Parameter
//http://localhost:2025/user?name=pratik&age=20
app.get('/user',(req,res)=>{
     const name = req.query.name 
     const age = req.query.age ;
     console.log(name, age);
     res.send(`Hello ${name} , Age ${age}`);
     
})

//Return JSON Response
app.get("/search",(req,res)=>{
     const productName = req.query.productName
     const price = req.query.price ;
     //res.json({productName, price})
     res.json(req.query)
})

//Start the Server
app.listen(2025,()=>{
     console.log("Server started on port 2025");
})