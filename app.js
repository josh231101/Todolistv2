const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const _ = require("lodash")

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

//Connect to todolistDB
mongoose.connect("mongodb://localhost:27017/todolistDB",{ useNewUrlParser: true });

//First _schema_ then _model_
const itemsSchema = {
  name : String
}

const Item = mongoose.model("Item",itemsSchema);

const item1 = new Item({
  name : "Create your list"
})
const item2 = new Item({
  name : "Use the + to add notes"
})
const item3 = new Item({
  name : "<--Click to delete"
})
const defaultItems = [item1,item2,item3]


app.get("/",function(req,res){
  Item.find(function(e,items){
    if(items.length === 0){
      Item.insertMany(defaultItems,function(err){
        if(err){console.log(err);}
        else {console.log("Array saved");}
      });
      res.redirect("/")
    }else{
      res.render("lists",{
        listTitle : "Today",
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
  console.log("Element saved! ");
  res.redirect("/")
});

app.post("/delete",function(req,res){
  const nameOfList = req.body.nameOfList
  console.log(nameOfList);
  const itemChecked = req.body.checkbox;
  if(nameOfList === "Today"){
    console.log(req.body.checkbox);
    Item.deleteOne({_id: itemChecked},function(err){
      if(err){console.log(err);}
      else{res.redirect("/")}
    })
  }else{
    List.updateOne({name : nameOfList}, {$pull : {items : {_id : itemChecked}}},function(err){
      if(err){console.log(err);}
      else{res.redirect("/" + nameOfList)}
    })
  }

  //OTHER WAY
  // Item.findByIdAndRemove(itemChecked,function(err){...})

})

const listSchema = {
  name : String,
  items : [itemsSchema]
}
const List = mongoose.model("List",listSchema)

app.get("/:customListName",function(req,res){
  const customListName = _.capitalize(req.params.customListName)
  console.log(customListName);

  List.findOne({name : customListName},function(err,foundList){
    if(!err){
      //If foundlist doesn exist
      if(!foundList){
        const list = new List({
          name : customListName,
          items : defaultItems
        })
        list.save()
        res.redirect("/" + customListName)
      }
      else{
        //SHOW THE EXISTING LIST
        console.log("Exists");
        res.render("lists",{
          listTitle : foundList.name,
          newListItems : foundList.items,
          route : "/" + customListName
        })
      }
    }
  })

});
app.post("/:customListName",function(req,res){
  const listName = req.params.customListName;
  const newTask = req.body.task;
  console.log(req.params.customListName);
  const newItem = new Item({
    name : newTask
  })
  console.log(newItem.name);
  List.updateOne({name : listName},{$push : {items : newItem}},function(err){
    if(!err){ res.redirect("/" + listName) }else{console.log(err);}
  })
  //OTHER WAY
  // List.updateOne({name : listName},function(err,foundList){
  //   foundList.items.push(newItem)
  //   foundList.save()
  //   //redirect thing
  // })
})

app.listen(8080,function(){
  console.log("Server running on port 8080");
});
