const products = [
    ['Gucci round bucklet belt',350],
    ['Gucci round bucklet belt',320],
    ['Smily T-shirt',50],
    ['Smily T-shirt',50],
];

const calculateDiscountedPrice = discount => {
    for (let i=0; i<products.length;i++){
        products[i][1] = products[i][1]-products[i][1]*discount/100
    }
}

calculateDiscountedPrice(10)
console.log(products)

//map array function
const calculateDiscountedPriceMap = discount => products.map(
    product => [product[0],product[1]-product[1]*discount/100]
)

let discPrice = calculateDiscountedPriceMap(10)
console.log(discPrice)


const nonPremiumProducts = products.filter(product => product[1]<=300)
    .map(prod => [prod[0].toUpperCase(),prod[1]])
    .reduce((stocks, currentProduct)=>{
        let stockItem = stocks.find(item=>item[0]===currentProduct[0]);
        if (!stockItem){
            stocks.push([currentProduct[0],1]);
        }
        else {
            stockItem=++stockItem[1]
        }
        return stocks
    },[])

console.log(nonPremiumProducts)

//for traversing, use forEach function
const array = [2,1,3,4,5,6]
array.forEach(myfunction)
function myfunction(element, index, arr){
    console.log(element)
}

// function definitions
// 1. Named function
function squareOfNumber(n){
    return n*n;
}

// 2. Anonymous function
 let squareNumber = function(n){
    return n*n;
 }

//  3. Arrow function
let square = n=> n*n

console.log("Results of different function definitions: ",squareOfNumber(5), squareNumber(5), square(5))


// for transformation of arrays, use map function
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
console.log("Tranformed array using map function: ", newArr)

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

// for filtering, use filter function

// for aggregation, use reduce function


