const express = require('express');
const router = express.Router();
const models = require('../models');

router.get("/", (req, res)=>{
  models.todo.findAll()
  .then(todos => {
    res.render("index", { todos: todos});
  })
})

router.post("/", (req,res) =>{
  console.log(req.body);
  models.todo.build({
    todoitem: req.body.todoitem,
    complete: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
  .save()
  .then(newToDoItem => {
    console.log(newToDoItem);
    res.redirect("/");
  })
  // console.log("New Post Request", req.body);
  // todos.push({
  //   todoitem: req.body.todoitem,
  //   completed: false,
  //   id: todos.length + 1
  // })
})

router.get("/:id", (req, res) => {
  models.todo.update({
    complete: true,
    updatedAt: Date.now()
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(updatedRow => {
    console.log(updatedRow);
    res.redirect("/");
  })
  // console.log(req.params.id);
  // todos.forEach((item) => {
  //   if (item.id == req.params.id) {
  //     item.complete = true;
  //   }
  // })
})

module.exports = router;
