// Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)


//creo una funzione per definire se pari o dispari
function isItEven(number) {
    if (number % 2 == 0){
        return true;
    } else {
        return false;
    }
}

//creo una variabile per il numero inserito dall'utente
var insertedNumber;

var numberOfGames = 3;
var contatore = 0;
//creo ciclo dove l'utente inserisci un numero da 1 a 5
do {
    insertedNumber = prompt("Inserisci un numero da 1 a 5");
    console.log(insertedNumber);
    if ( !isNaN(insertedNumber) && insertedNumber >= 1 && insertedNumber <= 5) {
        var playerNumber = isItEven(insertedNumber);
    } 
    contatore++;
} while (numberOfGames < contatore);
