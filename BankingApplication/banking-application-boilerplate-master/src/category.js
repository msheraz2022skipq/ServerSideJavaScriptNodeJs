var category = function category(key) {
  
  if (key.toUpperCase()==='PL'){
    return "Personal Loan"
  }
  if (key.toUpperCase()==='VL'){
    return "Vehicle Loan"
  }
  if (key.toUpperCase()==='EL'){
    return "Education Loan"
  }
  if (key.toUpperCase()==='HL'){
    return "Home Loan"
  }

  };
  
  module.exports = {
    category: category
  };