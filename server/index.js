const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log(req.url, req.method)
    next();
})

app.listen(3003, () => console.log("I am listening to Dylan's Channel: localhost:3003")) 