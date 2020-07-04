//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const date = require( __dirname + "/date.js");
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

const newTasks = ["Buy some food","Eat the food."]
const workItems = ["Dont stop"]

app.get("/",function(req,res){
  const day = date.getDay();

  res.render("lists",{
    listTitle : day,
    newListItems : newTasks,
    route : "/"
  });

});

app.post("/",function(req,res){
  const newTask = req.body.task;
  newTasks.push(newTask);
  res.redirect("/")
  console.log(newTask);
});


app.get("/work",function(req,res){
  res.render("lists",{
    listTitle : "WorkList",
    newListItems : workItems,
    route : "/work"
  })
});

app.post("/work",function(req,res){
  const item = req.body.task;
  workItems.push(item);
  res.redirect("/work")
});

app.get("/about",function(req,res){
  res.render("about")
})

app.listen(8080,function(){
  console.log("Server running on port 8080");
});
