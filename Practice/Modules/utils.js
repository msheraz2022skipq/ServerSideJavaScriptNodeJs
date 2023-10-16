function addNumber(a,b){
    return a+b
}

// String Manipulation
const stringManipulation= {
    
    getInUpperCase : (mystring)=>{
        let newArray=[]
        for(const data of mystring){
            newArray.push(data.toUpperCase())
        }

        return newArray;
    },

    getInLowerCase:(mystring) => {
        let newArray=[];
        for(const data of mystring){
            newArray.push(data.toLowerCase());
        }

        return newArray;
    },

    getIndexPosition:(mystring, element)=>{
        return mystring.indexOf(element)
    }
}

// create Local or User-defined modules

module.exports={addNumber,stringManipulation}