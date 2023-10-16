const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile(fileName, function(err, data){
        if (err) 
            reject("Encountered error while reading file contents..!"); 
        else 
            resolve(data);
    });
      
    });
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = fileContents.toString().split(',')
      const output = data.map(element => {
        return element.toUpperCase()
      });
      resolve(output)

    });
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  let output = read(fileName).then(data=>{
    convertToUpperCase(data).then((output)=>{
      cb(null,output)
    })
  }).catch((err)=>{
    cb(err)
  })
};

module.exports = {
  readAndConvertFileContents,
};
