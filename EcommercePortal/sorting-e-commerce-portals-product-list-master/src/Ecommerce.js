
const fs = require('fs')
const parse = require('csv-parser')
const lodash = require('lodash')
const { loadavg } = require('os')


//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback


const readFileContents = (fileName, cb) => {
  try{
    if (fs.existsSync(fileName)){
    var fileContents=[]
    fs.createReadStream(fileName)
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", function (row) {
        fileContents.push(row);
      })
      .on("end", function () {
        cb(null,fileContents);
      })}
      else{
        //error
        cb("Encountered error while reading file contents..!")
      }
  }
  catch(err){
    console.log('Error encountered!')
  }
 
}




//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  let sortedData;
  sortedData = fileContents.sort((a, b) => {
    return a.price >= b.price
      ? 1
      : -1
  })
  cb(null, sortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
//use map where ever required 
  
//use lodash sortBy() and compact() if required
  let filteredData = fileContents.filter(val => parseFloat(val.product_rating).toString() === val.product_rating.toString())
  let sortedData = lodash.sortBy(filteredData,['product_rating'])
  sortedData=lodash.compact(sortedData)
  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  const writeStream = fs.createWriteStream(outputFileName);
  writeStream.write(JSON.stringify(sortedData))
  cb(null)
}





module.exports = {
    readFileContents,
    sortDataOnPrice,
    sortDataOnRating,
  
}