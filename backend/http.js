import http, {createServer} from "http";

  



 const port =9000;
//  400 se upr koi bhi port
 const localname = "127.0.0.1";


const data =[
    {
        id:1,
        name:"priya",
        phone:123456789,
    }
]


 const server = http.createServer((request,reponse)=>{
 reponse.statusCode = 200;
 reponse.setHeader ("Content-Type","application/json")
//  text/plain
 reponse.end(JSON.stringify(data))
})

server.listen(port,localname, () =>{console.log("server Started")});