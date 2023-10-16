const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   if (cycling<=0 || running<=0 || swimming<=0 || extraCalorieInTake<=0){
      return -1
   }
   let monthlyCaloriesIntake = 30*100;
   let burnedCalories = 2*(cycling*4+running*4+swimming*4);
   weightLostInAMonth = (burnedCalories-monthlyCaloriesIntake)/1000;
   
   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

