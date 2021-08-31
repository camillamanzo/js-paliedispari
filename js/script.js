/*
 *      Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
*/




// let parola = prompt("Scriva una parola.")                    // Chiedo una parola all'utente

// function isPalindrome(parola1) {                             // Inizio la funzione

//     let parolaReverse = ""                                   // Inizializzo una variabile vuota da riempire con le lettere (come fosse un array)

//     for (i = parola1.length - 1; i >= 0; i--){               // Con il ciclo for (al contrario) trovo le lettere da mettere nella variabile
//         // console.log(parola1[i]);
//         parolaReverse += parola1[i];
//     }

//     if (parola1 === parolaReverse){                          // Verifico che la parola inserita sia uguale al contrario
//         return true;
//     }
//     return false;
// }

// if (isPalindrome (parola) ){
//     console.log("la tua parola: " + parola +  " è un palindromo.")
//     }else{
//         console.log("la tua parola non è un palindromo.");
// }






/*
 *      Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
*/



let pariODispari = prompt("Se vuole essere pari, scriva 'pari' se vuole essere dispari, scriva 'dispari'.");

if (pariODispari != "pari" && pariODispari != "dispari") {

    pariODispari = prompt("Puo' solo inserire 'pari' o 'dispari'.");
}
console.log ("La sua scelta è: " + pariODispari);



let numeroUtente = parseInt(prompt("Scelga un numero da 1 a 5"));

if ( numeroUtente < 1 || numeroUtente > 5){

        numeroUtente = prompt ("Puo' inserire solo un numero da 1 a 5.");
    }
console.log ("La sua scelta è: " + numeroUtente);



function numeroRandom (num1, num2) {
    return Math.floor(Math.random() * (num1 - num2 + 1) + num2);
    }

let numeroComputer = numeroRandom (1, 5);
console.log ("Il numero random è: " + numeroComputer)

var numeroFinale = numeroComputer + numeroUtente;
console.log ("il totale è di: " + numeroFinale);



function isPari(numero) {
    if ( numero % 2 == 0 ) {
        return true;
    } 
    return false;
}


