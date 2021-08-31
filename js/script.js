/*
 *      Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
*/




let parola = prompt("Scriva una parola.")                    // Chiedo una parola all'utente

function isPalindrome(parola1) {                             // Inizio la funzione

    let parolaReverse = ""                                   // Inizializzo una variabile vuota da riempire con le lettere (come fosse un array)

    for (i = parola1.length - 1; i >= 0; i--){               // Con il ciclo for (al contrario) trovo le lettere da mettere nella variabile
        // console.log(parola1[i]);
        parolaReverse += parola1[i];
    }

    if (parola1 === parolaReverse){                          // Verifico che la parola inserita sia uguale al contrario
        return true;
    }
    return false;
}

if (isPalindrome (parola) ){
    console.log("la tua parola: " + parola +  " è un palindromo.")
    }else{
        console.log("la tua parola non è un palindromo.");
}



/*
 *      Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
*/






