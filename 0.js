
var Mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"
Mongo.connect(url,(err,db)=>{
    var dbo = db.db('SecondDay')
    let a = 3
    var obj = [
        {
            name:"Hamza"+a,
            age:20+a,
            phone:'076537281'+a
        },
        {
            name:"Elyas"+a,
            age:14+a,
            phone:'072334190'+a
        },
        {
            name:"Ayaz"+a,
            age:9+a,
            phone:'079182123'+a
        },{
            name:"Sardar"+a,
            age:19+a,
            phone:'076232323'+a
        },{
            name:"Ansar"+a,
            age:18+a,
            phone:'075672892'+a
        },{
            name:"Shafi"+a,
            age:24+a,
            phone:'076428289'+a
        },{
            name:"Azizi"+a,
            age:28+a,
            phone:'073012372'+a
        }
    ]
    dbo.collection('Blog').insertMany(obj,(err,res)=>{
        console.log("user added")
        db.close()
    })
})