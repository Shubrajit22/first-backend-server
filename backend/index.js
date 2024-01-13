const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req,res)=>{
    res.send('login kar chupchap')
})
app.listen(port, () => {
  console.log(`serving at http://localhost:${port}`)
})