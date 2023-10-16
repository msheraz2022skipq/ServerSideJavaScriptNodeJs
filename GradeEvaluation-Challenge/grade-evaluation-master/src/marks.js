// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (math === undefined || english === undefined || science === undefined ||social === undefined || language === undefined){
                    reject('Null values for marks')
                }
                resolve(math+english+science+social+language)
            });
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (totalMarks===undefined){
                throw new Error('NUll values for marks')
            }
            resolve(totalMarks/500)
        })
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (averageMarks===undefined){
                reject('Null values for marks')
            }
           if (averageMarks*100>=90){
            resolve('A+')
           }
           if (averageMarks*100>=80 && averageMarks*100<=89){
            resolve('A')
           }
           if (averageMarks*100>=70 && averageMarks*100<=79){
            resolve('B')
           }
           if (averageMarks*100>=60 && averageMarks*100<=69){
            resolve('C')
           }
           if (averageMarks*100>=50 && averageMarks*100<=59){
            resolve('E')
           }
            resolve('F')
        })
        
    
    })   
}


//using .then method
calculateTotalMarks(99,90,90,99,99).then((total)=>{
    return calculateAverageMarks(total)
}).then((average)=>{
    return calculateGrade(average)
}).then((grade)=>{
    console.log('Grade is (.then): ',grade)
}).catch((error)=>{
    console.log(error)
})


//using async await


const calcGrade = async (math,english,science,social,language)=>{
    const total = await calculateTotalMarks(math,english,science,social,language)
    const average = await calculateAverageMarks(total)
    const grade = await calculateGrade(average)
    return grade
}

calcGrade(99,90,90,99,99).then((res)=>{
    console.log('Grade is (async/await): ',res)
}).catch((error)=>{
    console.log(error)
})


module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
