console.log('work');

let numbers = prompt("Inserisci un numero di 4 cifre:");

if(numbers.length !== 4) {
} else {
    let sum = 0;

    for( i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }

    console.log("La somma delle cifre del numero", numbers, "è:", sum);
}