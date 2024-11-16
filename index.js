const express=require("express");
const app = express();
const path=require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

let menu=[
];

const port = 8080;

app.set("view engine","views");
app.use(express.static("public"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

app.get("/ig",(req,res)=>{
    res.render("index.ejs",{menu});
});

app.get("/admin/menu",(req,res)=>{
    res.render("menu.ejs",{menu});
});

app.get("/admin/coffe",(req,res)=>{
    res.render("add.ejs");
})

app.post("/admin/coffe",(req,res)=>{
    let id=uuidv4();
    let {imgName , title , text } =req.body;
    menu.push({id,imgName,title,text})
    res.redirect("/admin/menu");
});

app.delete("/admin/coffe/:id",(req,res)=>{
    let sid=req.params.id;
    menu=menu.filter((el)=>(el.id !== sid));
    res.redirect("/admin/menu");
});

app.get("/admin/coffe/:id",(req,res)=>{
    let sid=req.params.id;
    let obj=menu.filter((el)=>(el.id === sid));
    res.render("edit.ejs",{obj});
})


app.patch("/admin/coffe/:id",(req,res)=>{
    let sid=req.params.id;
    menu=menu.filter((el)=>(el.id !== sid));
    let {imgName , title , text } =req.body;
    menu.push({id:sid,imgName,title,text})
    res.redirect("/admin/menu");
});
app.listen(port,()=>{
    console.log(`lisning on port ${port}`);
});