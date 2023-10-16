const products = [
    ['Gucci round bucklet belt',350],
    ['Gucci round bucklet belt',320],
    ['Smily T-shirt',50],
    ['Smily T-shirt',50],
];

const premiumProducts = products.filter(product => product[1]>300)
console.log(premiumProducts)

const nonPremiumProducts = products.filter(product => product[1]<=300)
const nonPrem = nonPremiumProducts.map(product => [product[0],product[1]-product[1]*15/100])
console.log(nonPrem)


