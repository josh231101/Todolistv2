const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const date = require( __dirname + "/date.js");
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

//Connect to todolistDB
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser : true});

//First _schema_ then _model_
const itemsSchema = mongoose.Schema({
  name : String
})

const Item = mongoose.model("Item",itemsSchema);

const work = new Item({
  name : "Work 3 hours"
});
const sleep = new Item({
  name : "Sleep at 10"
});
const code = new Item({
  name : "Code 10 hours"
});

app.get("/",function(req,res){
  const day = date.getDay();

  Item.find(function(e,items){
    if(items.length === 0){
      Item.insertMany([sleep,code,work],function(err){
        if(err){console.log(err);}
        else {console.log("Array saved");}
      });
      res.redirect("/")
    }else{
      res.render("lists",{
        listTitle : day,
        newListItems : items,
        route : "/"
      })
    }
  })
});

app.post("/",function(req,res){
  const itemName = req.body.task;
  const newItem = new Item({
    name : itemName
  });
  newItem.save();

  res.redirect("/")
});

app.post("/delete",function(req,res){
  const itemChecked = req.body.checkbox;
  console.log(req.body.checkbox);
  Item.deleteOne({_id: itemChecked},function(err){
    if(err){console.log(err);}
    else{res.redirect("/")}
  })
  //OTHER WAY
  // Item.findByIdAndRemove(itemChecked,function(err){...})

})
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
