var { MongoClient } = require('mongodb')
var dbConnect;
module.exports = {
    conDb:(cb)=>{
        MongoClient.connect('mongodb://localhost:27017/SecondDay')
        .then((client)=>{
            dbConnect = client.db()
            return cb()
        })
        .catch((err)=>{
            console.log(err)
            return cb()
        })
    }
    ,
    getDb: ()=> dbConnect
}