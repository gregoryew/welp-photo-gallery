const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../client/public')))
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log(req.url, req.method)
    next();
})
app.get('/welp/photo/',(req,res)=> {
    db.getById(5, (error,results) => {
        if (error) {
            console.log('error from app.get')
        } else {
            res.send(results)
        }
    })
}) 
app.listen(3003, () => console.log("I am listening to Dylan's Channel: localhost:3003"));