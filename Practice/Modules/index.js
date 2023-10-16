// Local or User-defined modules
var utils = require('./utils')

console.log(utils.addNumber(4,4))



// built-in modules e.g 'os', 'path
const os = require('os')
console.log('System has: ', os.cpus().length, 'CPUs')
console.log('System hostname: ', os.hostname())
console.log('System architecture: ', os.arch())





// String Manipulation
var myStringArray = ['Sheraz', 'Sana Ullah','Hameed Ullah','Ameer Abdullah']

console.log(utils.stringManipulation.getInUpperCase(myStringArray))
console.log(utils.stringManipulation.getInLowerCase(myStringArray))
console.log(utils.stringManipulation.getIndexPosition(myStringArray, 'Sheraz'))

