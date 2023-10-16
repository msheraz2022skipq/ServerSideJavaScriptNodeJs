const data = require('./app')

data.addNotes('firstname1','lastname1')
data.getAllNotes()
data.readNote('sheraz')
data.removeNote('lastname1')
data.getAllNotes()


//Stream and Buffer

const fs = require('fs')
const readline = require('readline')
//readling allows to read data from stream one line at a time

const writeStream = fs.createWriteStream('outputfile.txt')

const file = readline.createInterface({
    input: fs.createReadStream('input.txt')
})

var finalData = [];
file.on('line', (line)=>{
    const myArray = line.split(",");
    for (const element of myArray){
        const data = (element.substring(0,1).toUpperCase()).concat((element.substring(1)).toLowerCase())
        finalData.push(data)
    }

    writeStream.write(finalData.toString()+'\n')
    finalData=[];
})




