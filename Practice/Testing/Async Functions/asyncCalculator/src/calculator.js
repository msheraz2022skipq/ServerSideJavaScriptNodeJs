const addition = (a,b,cb)=>{
    cb(a+b)
}

const subtraction = (a,b,cb)=>{
    cb(a-b)
}

module.exports={
    addition,
    subtraction
}