console.log("it works");


const user_number1 = prompt("Insert first number:");


const user_number2 = prompt("Insert second number:");


if (user_number1 > user_number2) {
    console.log("User 1 it's first ",user_number1)
  
} else if ( user_number2 > user_number1) {
    console.log("User 1 it's first " ,user_number2);
    
} else {
    console.log("The same number ",user_number1,user_number2)
}