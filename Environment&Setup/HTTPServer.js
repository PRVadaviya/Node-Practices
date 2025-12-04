const http = require('http')

const server = http.createServer((req,res)=>{
     res.write("server is running...")
     res.end()
})

server.listen(2025,()=>{
     console.log("Server running on http://localhost:2025");
})