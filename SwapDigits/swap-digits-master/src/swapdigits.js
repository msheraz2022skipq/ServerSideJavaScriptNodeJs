const swapDigits = (number)=>{
    let swappedNumber = 0
    if (number<=0){
        return 0
    }
    if (number.toString().length%2!=0)
     {
        x = 1;
        swappedNumber+=10**(number.toString().length-1)
        number=parseInt(number.toString().slice(1))
        console.log(number)
        
	    while (number !=0) {
		    var dg1 = number % 10,
			dg2 = ((number - dg1) / 10) % 10;
		    swappedNumber += x * (10 * dg1 + dg2);
		    number = Math.floor(number / 100);
		    x *= 100;
	        }
     }
     else {
		x = 1;
	    while (number != 0) {
		    var dg1 = number % 10,
			dg2 = ((number - dg1) / 10) % 10;
		    swappedNumber += x * (10 * dg1 + dg2);
		    number = Math.floor(number / 100);
		    x *= 100;
	        }
            
     }
    return swappedNumber;
    
}

module.exports = swapDigits
