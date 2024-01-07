const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require("cors");
const port = 3000

app.use(express.json());
//body{title,descriptipn}
app.use(cors());

app.get("/todos", async (req, res) => {
  const todos = await todo.find({})
  res.status(200).json({
    msg : "Todos fetched",
    Todos : todos
  })
})

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
        msg : "You sent a wrong input"
      })
      return ;
    }
    await todo.create({
      title : createPayload.title,
      description : createPayload.description,
      completed : false
    })
    res.status(200).json({
      msg : "Todo has been created",
      msg2:"hello"
    })
  })

  app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
        msg : "You sent a wrong inputs"
      })
      return 
    }
    todo.update({
      _id : req.body.id
    },{completed:true})
    res.json({
      msg : "Todo updated successfully!"
    })
  })

app.listen(port, () => {
  console.log(`Todo application running on port ${port}`)
})