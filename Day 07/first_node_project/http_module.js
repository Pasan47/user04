const { LOADIPHLPAPI } = require("dns/promises");
const http = require("http")
const url = require("url")

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true);
    console.log("Passsed URL");
    const path = parsedUrl.pathname;
    const method = req.method;

    if(path ==="/api/users" && method === "GET"){
        const users = [
           { id:1, name:"pasan"},
           { id:2, name:"John"}
        ];

        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(users));
    } 
    else if (path == "/api/users" && method === "POST"){
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk.toString()
        });
        req.on("end",()=>{
            const newUser = JSON.parse(body);
            res.writeHead(201,{"Content-type":"application/json"});
            res.end(JSON.stringify(newUser));

        })

    } else if (path == "/api/pages" && method === "POST"){
        let bodyForPage = "";
        req.on("data", (chunk)=>{
            bodyForPage += chunk.toString()
        });
        req.on("end",()=>{
            const newPage = JSON.parse(bodyForPage);
            res.writeHead(201,{"Content-type":"application/json"});
            res.end(JSON.stringify(newPage));

        })

    } 
})

server.listen(3000, ()=>{
    console.log("Server listneing on port 3000");
})