/**
 * chiedere ad unutente una parola, creare una funzione
 * per verificare se è palindroma
 */

const userWord = prompt("Inserire una parola");

if (userWord === revertWord(userWord)){
    console.log("La tua parola è palindroma");
}else{
    console.log("La tua parola è normalissima");
}



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