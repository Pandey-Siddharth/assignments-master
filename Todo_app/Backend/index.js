const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
//body{title,descriptipn}

app.get("/todos", (req, res) => {
  res.send('')
})

app.post("/todo", function(req, res) {
    res.send('')
  })

  app.post("/completed", function(req, res) {
    res.send('')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})