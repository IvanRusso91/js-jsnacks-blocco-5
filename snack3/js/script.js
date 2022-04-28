/*
Jsnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

//--------------------------------------------------
let parola = 'anihccuz';

console.log(parola);

function revString() {
  return parola.split("").reverse().join("");
}

document.querySelector('.specchio').innerHTML = revString();

console.log(revString());