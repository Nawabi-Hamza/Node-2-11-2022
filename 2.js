const { json } = require('express')
const express = require('express')
var { conDb , getDb } = require('./1')
const { ObjectId } = require('mongodb')
var db
var app = express()
conDb((err)=>{
    if(!err){
        app.listen(7070,()=>{
            console.log("port is ready 7070")
        })
    }
    db = getDb()
})
app.get('/api',(req,res)=>{
    var data = []
    db.collection('Blog').find().limit(3)
    .forEach(post => data.push(post))
    .then(()=>{
        res.status(200).json(data)
    })
    .catch(()=>{
        res.status(500).json({err:"Something Went Wrong"})
    })
})