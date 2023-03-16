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
 * 
 * @param {string} word1 
 * @returns banalmente una frase, ma potremmo volere un output booleano
 */
function isPalindrome(word1) {
    let myAnswer;
    if (word1 === revertWord(word1)){
        myAnswer = ("La tua parola è palindroma");
    }else{
        myAnswer = ("La tua parola è normalissima");
    }
    return myAnswer;
}
