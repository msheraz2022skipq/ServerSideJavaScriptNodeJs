const AgeError = require("./ageException");

const ageValidator = (age)=>{

    try {
        if (age<0){
            throw new AgeError('Age cannot be negative.')
        }
        if (age>=0 && age<18){
            throw new AgeError('Not valid date for voting.')
        }
        console.log('Age is Valid');
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log('Age is validated')
    }
}

ageValidator(1)