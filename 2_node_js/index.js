const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello_World!");
});

app.listen(8080,()=>{
    console.log("Listening on PORT : 8080!");
})