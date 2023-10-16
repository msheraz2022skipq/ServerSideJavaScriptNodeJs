 
   // Define a getEmployee function that iterates over the employees list and displays it
   // Employees must be displayed after a timeout of 1 second.
   const getEmployee = (employees,callback)=> {
            setTimeout(() => { 
                    var names=[]
                    employees.forEach(element => {
                        names.push(element.name)
                    });
                return callback(undefined,names);           
            },1000);
       
   }
   
   // Define a function that creates a new employee after 2 seconds.
   // and then makes a call to callback function to display the same.
   const createEmployee = (employees,employee, callback) => {   
       setTimeout(()=>
       {
           employees.push(employee)  
           return callback(undefined, employees);
       },2000)
   }  

//    let array = [{name:'sheraz'},{name:'hameed'}]
//    getEmployee(array).then((names)=>{
//     console.log(names)
//    }).catch((err)=>{
//     console.log(err)
//    })

   module.exports = {getEmployee,createEmployee}
  


