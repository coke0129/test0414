"use strict";

const express =require("express");
const app =express();
const port = 3000;
const datbase ={};
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get('/posts',(req,res)=>{
    res.status(200);
    res.json(database);
});

app.post('/posts',(req,res)=>{
    database[Object.keys(database).length]=req.body.content;
    res.redirect("/");
});
app.listen(port,()=>{
    console.log('Example app listening on port ${port}');
});