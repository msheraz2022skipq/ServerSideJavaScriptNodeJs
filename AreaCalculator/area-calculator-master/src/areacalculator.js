const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    

    if (choice==='circle' && typeof(radius)==='number'){
        area = 3.14*(radius*radius)
    }
    else if (choice==='rectangle' && typeof(length)==='number' && typeof(breadth)=='number'){
        area =length*breadth
    }
    else if (choice==='square' && typeof(side)==='number'){
        area = side*4
    }
    else {area = -1}
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    return area
}
module.exports = {calculateArea}
