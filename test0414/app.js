"use strict";

const express =require("express");
const app =express();
const port = 3000;
const database ={0:"A",
                 1:"B",
                 2:"C",
};
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/posts",(req,res)=>{
    res.status(200);
    res.json(database);
});
app.get("/posts/datalength",(req,res)=>{
    res.status(200);
    res.json(database.length);
});
app.delete("/posts/:id",(req,res)=>{
    const keys = Object.keys(database);
    const id =Number(req.params.id);
    if(keys.length === 0){
        return res.status(404).send("No data to delete");
    }
    if(isNaN(id) || id<0 || id>=keys.length){
        return res.status(400).send(`out of bound ${req.params.id}`);
    }

    const lastKey = keys[id];
    delete database[lastKey];
    res.status(200).json(database);
});
app.post("/posts",(req,res)=>{
    database[Object.keys(database).length]=req.body.content;
    res.redirect("/");
});


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
});