const express = require('express')
const app = express()
const path = require('path')
const port = 4444

app.get('/',(req,res)=> {
res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/contact',(req,res)=> {
res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port,()=> {
console.log(`server is running at http://localhost:${port}`)
})