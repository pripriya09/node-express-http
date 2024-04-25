import express from "express"


const port = 8000;
const host = "127.0.0.1";



const data =[
    {
        id:1,
        name:"priya",
        phone:123456789,
    },
    {
        id:2,
        name:"sheetal",
        phone:123456789,
    },
    {
        id:3,
        name:"sudhir",
        phone:123456789,
    },
    {
        id:4,
        name:"chandan",
        phone:123456789,
    }
];

const app =express();
// here app is a handlerfunction and konsi request ke upr hum is handler ko use krna chahtein h
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.status(202).send(JSON.stringify(data));
    // res.status(202).json(data)
});
app.post("/submit",(req,res)=>{
//  console.log(res.body)
 data.push(req.body);
 res.json(data)
 data.push(JSON.parse(req.body))
 res.send(JSON.stringify(data))
});

   app.put("/update/:id",(req,res)=>{
    const  urlArr = req.url.split("/")
    const idFromURL = Number(urlArr[urlArr.length-1]);
    const updatedata =data.map((obj )=>{
        if(obj.id === idFromURL){
            obj = req.body
            return obj
        }else return obj;
    });
    res.json(updatedata)
})

app.delete("/delete/:id", (req, res) => {
    const  urlArr = req.url.split("/")
    const idFromURL = Number(urlArr[urlArr.length-1]);
    const deletedata = data.filter((obj) => obj.id !== idFromURL);
    res.json(deletedata);
});


app.listen(port,host,()=>{
    console.log("server started")
})



















// restart  at any time `rs`