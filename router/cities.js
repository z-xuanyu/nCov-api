const fs = require('fs')
const path = require('path')
module.exports = function(req,res){
    fs.readFile(path.resolve(__dirname,'../data/cities.json'),'utf8',(err,data)=>{
        if(err) throw err
        res.send(data)
    })
}