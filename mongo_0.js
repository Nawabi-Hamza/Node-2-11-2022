var  express  = require('express')
var Mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
var app = express()

app.listen(4040,()=>{
    console.log("Port is Ready")
})

app.get('/',(req,res)=>{
    res.send("<center><h1>We are in Home page</h1></center>")
})

app.get('/blogs',(req,res)=>{
    Mongo.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db('SecondDay')
        dbo.collection("Blog").find({},{projection:{_id:0 ,name:1 ,age:1}}).toArray((err,result)=>{
            if(err)throw err;
            res.json(result)
            db.close()
        })
    })
})


// post do not show data in url 
// get show the data in url