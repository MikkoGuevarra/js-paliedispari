// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)


//creo una funzione per definire se pari o dispari
// function isItEven(number) {
//     if (number % 2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// }

function isEven(num) {
    return num % 2 == 0;
}

//chiedo all' utente un numero da 1 a 5
var selectedNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
//creo un ciclo con la condizione che l'utente deve inseire un numero valido, maggiore di 0 e minore di 5
while (selectedNumber <= 0 || selectedNumber > 5 || isNaN(selectedNumber)) {
    selectedNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
}
console.log("your number is " + selectedNumber);

var selection  = ["pari", "dispari"]

//chiedo all'utente se l'esito fra i due numeri  sarà pari o dispari
var esitoTotale = prompt("pari o dispari?");
while (!selection.includes(esitoTotale)) {
    esitoTotale = prompt("pari o dispari?");
}
console.log("you choose " + esitoTotale);

//genero un numero per il bot
var botNumber = Math.floor((Math.random() * 5) + 1);
console.log("bot's number is : " + botNumber);
