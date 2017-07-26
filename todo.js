const express = require('express');
const router = express.Router();

const todos = [
  {
    todoitem: 'Take a nap',
    complete: false,
    id: 1
  },
  {
    todoitem: 'Go to NYC',
    complete: true,
    id: 2
  },
  {
    todoitem: 'Learn coding',
    complete: true,
    id: 3
  },
  {
    todoitem: 'Get a job',
    complete: false,
    id: 4
  },
  {
    todoitem: 'Take another nap',
    complete: false,
    id: 5
  },
];

router.get("/", (req, res)=>{
  res.render("index", { todos: todos});
})

router.post("/", (req,res) =>{
  console.log("New Post Request", req.body);
  todos.push({
    todoitem: req.body.todoitem,
    completed: false,
    id: todos.length + 1
  })
  res.redirect("/");
})

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  todos.forEach((item) => {
    if (item.id == req.params.id) {
      item.complete = true;
    }
  })
  res.redirect("/");
})

module.exports = router;
