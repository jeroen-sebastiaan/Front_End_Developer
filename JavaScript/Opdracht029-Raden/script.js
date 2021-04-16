// Prompt 
const prompt = require('prompt-sync')();
var guess= 5;

//Welkom 
var naam = prompt('Wekom! Wat is je naam? ');
console.log('Hey ' + naam);

// Willekeurig gekozen tal
const geheimGetal = function (laagsteGetal, hoogsteGetal) {
    return Math.random() * (hoogsteGetal - laagsteGetal + 1) + laagsteGetal;
};

// Invullen getallen om te raden 
console.log('Je mag nu twee getallen invullen. Daarna mag je vijf keer raden welk getal ik heb gekozen.')
var laagsteGetal = prompt("Dit is het eerste en laagste getal (dit getal doet ook mee): ");
laagsteGetal = Number(laagsteGetal);
var hoogsteGetal = prompt('Dit is het tweede en hoogste getal (dit getal doet ook mee): ');
hoogsteGetal = Number(hoogsteGetal);

//Raden maar!
console.log('Welk getal kies je als eerst? ');
var userGuess = prompt();
userGuess = Number(userGuess);

//Overeenkosmt gekozen getal 
let radenMaar = function(userGuess, geheimGetal){
while (guess > 0) {
    if (userGuess == geheimGetal){
      console.log('Gefelicteerd! Je heb het in ' + guess + ' keer goed geraden. Ik koos ook voor ' + geheimGetal);
      return guess -5;
    }
    else {
      console.log('Helaas, dat is niet goed. Je kan het nog ' + guess + ' keer proberen.');
      return guess -1;
    }
  };
};

// Afsluiting
var result = radenMaar(userGuess, geheimGetal);
result = Number(result); 
console.log(result);
console.log('Dag ' + naam + '. Tot de volende keer!');
