//Deel 1
const person = {
    name: "Sebastiaan",
    age: 34,
    evaluations: [7, 10, 9],
  };
  
  console.log(person);
  console.log(person.name);
  console.log(person.age);
  console.log(person["name"]);
  console.log(person["age"]);
  console.log(person.evaluations);

  //Deel 2
const kleur = ["Groen", "Blauw", "Rood"];
console.log(kleur.length);
console.log(kleur[0]);
console.log(kleur[kleur.length-1]);
kleur.push('Geel');
console.log(kleur);
kleur.push(5);
console.log(kleur);
kleur.push({greeting: "Hi ik ben een object"});
console.log(kleur);
console.log(kleur[kleur.length - 1].greeting); 

//Deel 3 
console.log(catBreeds[2].name);
console.log(catBreeds[0].energy_level);
console.log(catBreeds[1].temperament[0]);
const lengthTemperamentsCatThree = catBreeds[2].temperament.length; 
console.log(catBreeds[2].temperament[lengthTemperamentsCatThree - 1]);
console.log(catBreeds[2].food.favourite_food);
