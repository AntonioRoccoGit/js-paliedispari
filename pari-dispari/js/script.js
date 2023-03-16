/**
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

//scelta dell 'utente
let choice = prompt("Scegli 'Pari' o 'Dispari'");
let i = 0;

        //dispari            true
console.log(choice.toLowerCase() !== "pari");

 while (choice.toLowerCase() !== "pari" && choice.toLowerCase() !== "dispari" ){
     choice = prompt("Prova a scrivere 'Pari' o 'Dispari'");
    
 }
 console.log(choice);

//scelta numer da 1 a 5
let userNumber = parseInt(prompt("Scegli un numero, compreso tra 1 e 5"));

//sommiamo il numero utente + il nostro generatore
let numberTotal = userNumber + randomGenerator(1, 5);
console.log(numberTotal);

let winningCondition; 
if (isEven(numberTotal) === choice){
    console.log("Hai Vinto");
}else{
    console.log("Hai Perso mi dispiace");
}




///////////////////
// FUNZIONI

/**
 * Description generate a random number min and max included
 * @param {number} min
 * @param {number} max
 * @returns {number} retur a random number
 */
function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function isEven(controlNumber){
    let evenOrOdd = "pari";
    if(controlNumber % 2 !== 0){
        evenOrOdd = "dispari";
    }
    return evenOrOdd;
}