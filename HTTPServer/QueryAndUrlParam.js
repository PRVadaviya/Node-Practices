const http = require('http')
const url = require('url')

//query parameter
//http://localhost:2025/user?name=pratik&age=20

const server1 = http.createServer((req,res)=>{

    const urlData = url.parse(req.url,true).query ;
    console.log(urlData);
    res.end(`Hello ${urlData.name} , Age ${urlData.age}`)
})

server1.listen(2025);


//url parameter
//http://localhost:2026/user/100


const server2 = http.createServer((req, res) => {
  const parts = req.url.split("/");  // break URL into pieces

  if (parts[1] === "user") {
    const id = parts[2];
    res.end(`User ID = ${id}`);
  }
});

server2.listen(2026);






/*
URL Parameters
URL parameters are part of the URL path and typically represent a specific resource or ID.
https://example.com/users/10


Query Parameters
Query parameters appear after the ? in URL and are used to filter, sort, or search data.
https://example.com/products?category=mobile&sort=price

*/