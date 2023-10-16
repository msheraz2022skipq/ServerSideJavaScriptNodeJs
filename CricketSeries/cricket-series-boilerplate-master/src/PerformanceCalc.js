
const PerformanceCalculator=(runs,balls)=>{
      if (runs>30 && balls<15){
            return (runs/balls)+(runs/balls)*(1/100)
      }
      else if (runs>50 && balls<20){
            return (runs/balls)+(runs/balls)*(10/100)
      }
      else if (runs>100 && balls<50){
            return (runs/balls)+(runs/balls)*(20/100)
      }
      else {
            return (runs/balls)
      }
}

module.exports={PerformanceCalculator}
