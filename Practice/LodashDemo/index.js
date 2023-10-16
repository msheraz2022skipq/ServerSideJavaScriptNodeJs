const lodash = require('lodash')
const num = [1,2,2,3,4]
let result = lodash.uniq(num)
console.log(result)

const data = lodash.concat(num, [7,8])
console.log(data)

lodash.fill(num, 10)
console.log(num)

lodash.fill(num, '*',1,3)
console.log(num)

var country = [
    {'key': 'Pk', 'name': 'Pakistan'},
    {'key': 'USA', 'name': 'America'},
    {'key': 'AFG', 'name': 'Afghanistan'}
]

var countryData = lodash.filter(country, function(country){
return country.key == 'Pk';
}
)

console.log(countryData)