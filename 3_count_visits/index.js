const express=require("express");
cnost redis=require('redis');
const app=express();

const client=redis.createClient();

app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send("No of visits : "+visits);
        client.set('visits',parseInt(visits)+1);
    })
});

app.listen(8080,()=>{
    console.log("Listening on PORT:8080");
});