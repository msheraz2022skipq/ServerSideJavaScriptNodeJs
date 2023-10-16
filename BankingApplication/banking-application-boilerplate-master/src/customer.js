const category = require("./category");

var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      let available;
      for (let i=0;i<customerList.length;i++){
            if (customerList[i][customerList[i].length-1]===Category){
                  available=true
            }
      }

      if (!available){
      let subarray = [CustomerId,
      CustomerName,
      CustomerAge,
      CustomerAddress,
      CustomerContactNumber,
      Category]
      customerList.push(subarray)
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      for (let i=0;i<customerList.length;i++){
            if (customerList[i][customerList[i].length-1]===Category){
                  customerList[i]=[CustomerId,
                  CustomerName,
                  CustomerAge,
                  CustomerAddress,
                  CustomerContactNumber,
                  Category]
            }
      }
}

const getAllCustomers=()=>{
  return customerList
}

module.exports={addCustomer,updateCustomer,getAllCustomers}