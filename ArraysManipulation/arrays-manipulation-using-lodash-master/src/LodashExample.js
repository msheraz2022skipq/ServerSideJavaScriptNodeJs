
const lodash = require("lodash")

//import the lodash module


//Create a function to find a maximum value from number array.
const findMaxValue=(array)=>{
  return lodash.max(array)
}

//Create a function to return all values from numbers array 
//which are greater than the second parameter.​

const filterValues=(array, number)=>{
  return lodash.filter(array, function(num){
    return num>number;
  })
}

//Create a function to return all values of employeeName array in capital letters.
 const nameInCapital=(array)=>array.map(arr=>arr.toUpperCase())



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
