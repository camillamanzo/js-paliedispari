/*
 *      Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 * 
 *      Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
*/




//chiedo una parola all'utente
let parola = prompt("Scriva una parola.")

function isPalindrome(parola1, parola2) {
    if (parola1.value === parola2.value.reverse){
        return true;
    }
    return false;
}

if (isPalindrome (parola1) ){
    console.log("la tua parola:" + " " + parola + " " "è un palindromo.")
    }else{
        console.log("la tua parola non è un palindromo.");
}
