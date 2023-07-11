const path = require('path')
const fs =  require('fs')
console.log(__dirname)
//const directoryPath = path.join(__dirname, '')
//console.log(directoryPath) 

fs.readdir(__dirname, function(error, files){
    if(error){
        console.log(error)
    } else {
        files.forEach(function(file){
            console.log(file)
        })
    }
})