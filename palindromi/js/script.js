/**
 * chiedere ad unutente una parola, creare una funzione
 * per verificare se è palindroma
 */

// const userWord = prompt("Inserire una parola");

// if (userWord === revertWord(userWord)){
//     console.log("La tua parola è palindroma");
// }else{
//     console.log("La tua parola è normalissima");
// }


console.log(isPalindrome("ciao"));
console.log(isPalindrome("itopinonavevanonipoti"));


console.log(isPalindromeUpgraded("itopinonavevanonipoti"));
console.log(isPalindromeUpgraded("interpolazione"));


//////////////////////
// LE MIE FUNZIONI

/**
 * Una funzione utile ad invertire le lettere di una parola
 * @param {string} wordToRevert
 * @returns {string}
 */
function revertWord(wordToRevert) {
    //creiamo un ciclo per rigirare la parola
    let reverseUserWord = "";
    for (let i = wordToRevert.length - 1; i >= 0; i--) {
        reverseUserWord += wordToRevert[i];
    }
    return reverseUserWord;
}

/**
 * utilizzando una funzione che inverte le parole, possiamo confrontare e verificare se è palindroma
 * @param {string} word1 
 * @returns un valore booleno
 */
function isPalindrome(word1) {
    let myAnswer;
    if (word1 === revertWord(word1)){
        myAnswer = true;
    }else{
        myAnswer = false;
    }
    return myAnswer;
}

/**
 * per cercare di ottimizzare la verifica di una parola palindroma
 * ho creato una funzione piu semplice, specializzata in questo tipo di verifica
 * @param {string} myWord 
 * @returns un valore booleano
 */

function isPalindromeUpgraded(myWord){
    
    let answer = true;
    
    for(let i = 0; i < myWord.length; i++){
        
        if(myWord[i] === myWord[myWord.length - 1 - i] && answer === true){
            answer = true;
        }else{
            answer = false;
        }
    }
    return answer;
}
