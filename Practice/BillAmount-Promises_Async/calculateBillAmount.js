const calculateTotalBillAfterDiscount = (billAmount, discountPercentage)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (discountPercentage<=0){
                reject('Invalid discount percentage')
            }
            resolve(billAmount-(billAmount*discountPercentage))
        },2000)
    })
}

const validateBill = (billAmount)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(billAmount<=0){
                reject('Invalid bill amount')
            }
            else {
                resolve(billAmount)
            }
        })
    })
}

var billAmount=process.argv[2]
var discountPercentage = process.argv[3]


// calculateTotalBillAfterDiscount(billAmount, discountPercentage).then((result)=>{
//     console.log('The discounted bill is: ', result)
// }, error=>{
//     console.log(error)
// })


// Asynchronisation using Promises

// validateBill(billAmount).then((amount)=>{
//     return calculateTotalBillAfterDiscount(amount, discountPercentage)
// }).then((result)=>{
//     console.log('The discounted price is: ',result)
// }).catch(error=>{
//     console.log(error)
// })


// use of async/awaits
const discountedPrice = async (billAmount,discountPercentage)=>{
    const result = await validateBill(billAmount)
    const price = await calculateTotalBillAfterDiscount(result, discountPercentage)
    return price
}

discountedPrice(billAmount, discountPercentage).then((res)=>{
    console.log('Discounted price is: ', res)
}).catch((error)=>{
    console.log(error)
})
