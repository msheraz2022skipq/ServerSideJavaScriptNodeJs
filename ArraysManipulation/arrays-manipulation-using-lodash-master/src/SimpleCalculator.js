

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
const addNumbers=(number1,number2)=>{
    return number1+number2
}


//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
const subNumbers = (number1,number2)=>{
  return number1-number2
}

//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
const mulNumbers=(number1,number2)=>{
  return number1*number2
}

//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
const divNumbers=(number1,number2)=>{
  if (number2===0){
    return "Please provide valid numbers..!"
  }
  return number1/number2;
}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}