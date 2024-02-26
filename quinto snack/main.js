console.log('work');


let numbersAll = [];


/* for (let i = 0; i < 6; i++) {
    let numbers = Number(prompt("Type a number :"));
    
    if (numbers % 2) {
        numbersAll.push(numbers);
    }
   
}
 alert("Odd Numbers: " + numbersAll);

console.log("Odd Numbers: ", numbersAll);

 */
let i = 0;

while (i < 6) {
    let numbers = Number(prompt("Type a number:"));

    if (numbers % 2) { 
        numbersAll.push(numbers); 
    }
    i++;
}

alert("Odd Numbers: " + numbersAll);
console.log("Odd Numbers:", numbersAll);