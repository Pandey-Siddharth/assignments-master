const express = require('express');
const { createTodo } = require('./types');
const app = express()
const port = 3000

app.use(express.json());
//body{title,descriptipn}

app.get("/todos", (req, res) => {

})

app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
        msg : "You sent a wrong inputs"
      })
      return 
    }
    //put in mongoDB
  })

  app.post("/completed", function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = createTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
        msg : "You sent a wrong inputs"
      })
      return 
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})