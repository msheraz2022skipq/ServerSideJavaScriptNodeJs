const fs = require('fs')
const readline = require('readline')

const lodash = require('lodash');
const { callbackify } = require('util');
const parse = require('csv-parser')
const writeStream = fs.createWriteStream('output.txt')

//import all the modules require

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {
 

  
  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });

  rl.on('line',(data)=>{
    fileContents.push(data)
  })
  .on('close', function(){
    cb(null,fileContents)
  })

  

}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData ;

  filteredData = lodash.filter(fileContents, function(output){
    const newArray = output.split(',');
    return newArray[1].trim()=='female' &&  newArray[5].trim()=='southwest'
  })
  cb(null,filteredData)
  
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
 
  writeStream.write(filteredData.toString() + '\n')
  cb(null, 'Successfully wrote filtered data!')
    //use writeFile method to write the filteredData
  
}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
let fileContents = [];

fs.createReadStream(fileName)
.pipe(parse({ delimiter: ",", from_line: 2 }))
.on("data", function (row) {
  fileContents.push(row);
})
.on('close',()=>{
  cb(null,fileContents)
})

   
}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData ;
  filteredData = lodash.filter(fileContents, function(output){
    const newArray = output.split(',');
    return newArray[3].trim()=='0'
  })
  cb(null,filteredData)
//use lodash.compact() if required 

  
}


module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
  filterDataWithNoChildren
 }
