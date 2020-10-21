// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)


//scrivo una funzione per valutare la parola
function isItPalindrome(string) {
    //creo una variabile che trasforma string in un array, fa il reverse delle lettere e poi rimette insieme l'array per comporre la parola
    var wordReversed = string.split("").reverse().join("");
    if (wordReversed == string) {
        return true;
    } else {
        return false;
    }
}

// var word = isItPalindrome("aveva");
// console.log(word);

var insertedWord;
do {
    insertedWord = prompt("inserisci una parola palindroma");
    if (isItPalindrome(insertedWord)) {
        console.log("Ok the word inserted is " + insertedWord + " and it is palindrome");
    }
} while (!(isItPalindrome(insertedWord)));
