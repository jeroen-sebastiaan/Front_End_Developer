// Opdracht A
let words = ["nice", "awesome", "tof"];
let addTheWordCool = words.push('cool')
console.log(words);
console.log(addTheWordCool);

// Opdracht B
const amountOfElementsInArray = ['appels', 'peren', 'citroenen']
console.log(amountOfElementsInArray.length); 

// Opdacht C
const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
console.log(selectBelgiumFromBenelux[0]); 

// Opdracht D
const Animals = ["Haas", "Cavia", "Kip", "Schildpad"]
console.log(Animals); 

const lastElementInArray = Animals.length - 1;
console.log(lastElementInArray);
console.log(Animals[lastElementInArray]);

//Opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
const pos = 1;
const n = 3; 
const impeachTrumpSplice = presidents.splice(pos, n);
console.log(impeachTrumpSplice); 
console.log(presidents.slice(1, 4));

// Opdracht F
const stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}']
console.log(stringsTogether.join(' ')) ;

// Opdracht G
const combineArrays = function(array1, array2) {
<<<<<<< HEAD:JavaScript_Advanced/Array/array-methods1.js
    return array1.concat(array2);}
    
=======
  return array1.concat(array2);
  
>>>>>>> e93ef57ad9a8e82e30faed1ef0069a578779a93f:JavaScript_Advanced/Array/array.js
console.log(combineArrays([1, 2, 3], [4, 5, 6]));
