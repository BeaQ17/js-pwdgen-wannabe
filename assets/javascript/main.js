//chiedi nome utente
var userName = prompt("Qual è il tuo nome?");
console.log(userName);

//chiedi cognome utente
var userSurname = prompt("Qual è il tuo cognome?");
console.log(userSurname);

//chiedi colore preferito
var faveColor = prompt("Qual è il tuo colore preferito?");
console.log(faveColor);

//genera password
var greetElem = document.getElementById("saluto");
greetElem.innerHTML = "Ciao " + userName + ",";
var generateElem = document.getElementById("password");
generateElem.innerHTML = "La tua password è: " + userName + userSurname + faveColor + 21;

