const express = require('express');

const app = express();
const arr = [
    {
        id: 1,
        name: "Aditya",
        age: 21
    },
    {
        id: 2,
        name: "Rahul",
        age: 22
    },
    {
        id: 3,
        name: "Priya",
        age: 20
    },
    {
        id: 4,
        name: "Ankit",
        age: 23
    },
    {
        id: 5,
        name: "Sneha",
        age: 21
    }
];

app.get("/test",(req,res)=>{
    res.status(200).send("hello from backend");
})

app.get("/data",(req,res)=>{
    res.status(200).json({
        data :arr,
        status: "success"
    })
})

app.get("/getUser/:id",(req,res)=>{
    console.log(req.query);
    // console.log(req);
    const id=req.params.id;
    const data = arr.find(idx =>idx.id==id);
    // console.log(data ?data:"not found");

    res.status(200).json({
        status:"success",
        data:data?data:"not found"
    })
})

app.put("/updateUser/:id",(req,res)=>{
    const id=Number(req.params.id);
    const {name,age}=req.query;
    console.log(name,age);

    arr.map(idx=>{
        if(idx.id==id){
            idx.name=name;
            idx.age=age;
        }
    })
    res.status(200).json({
        status:"success",
        data:arr
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000 http://localhost:3000" );  
})
