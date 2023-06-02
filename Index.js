let messaggio1 = document.getElementById("messaggio1");
let messaggio2 = document.getElementById("messaggio2");

messaggio1.style.display = "none"; // promosso
messaggio2.style.display = "none"; // bocciato

let verificaButton = document.getElementById("button");
let risultato = document.getElementById("risultato");

risultato.classList.add("risultato");
risultato.style.display = "none";

function verifica() {
  let provaScritta = parseInt(document.getElementById("provaScritta").value);
  let provaPratica = parseInt(document.getElementById("provaPratica").value);

  risultato.style.display = "block";

  let somma = provaScritta + provaPratica;
  risultato.innerHTML = "Totale voto: " + somma;

  if (provaScritta <= 0 && somma > 18) {
    messaggio2.style.display = "block"; // bocciato
  } else if (provaScritta <= 0 && provaPratica < 18) {
    messaggio2.style.display = "block"; // bocciato
  } else if (provaScritta > 0 && somma < 18) {
    messaggio2.style.display = "block"; // bocciato
  } else if ((somma === 31 || somma === 32) && (provaScritta === 31 || provaPratica === 32)) {
    risultato.innerHTML = "Promosso con 30 e lode! " + somma;
    messaggio1.style.display = "block"; // promosso
    messaggio2.style.display = "none"; // bocciato
  } else {
    messaggio1.style.display = "block"; // promosso
    messaggio2.style.display = "none"; // bocciato
  }
}
