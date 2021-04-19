// Opdracht A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]

const findSpiderMan = superheroes.find( ({ name }) => name === 'Spiderman' );
console.log(findSpiderMan);

    // Alternatief
const findSpiderMan = (superheroes) => superheroes.name === "Spiderman";
console.log(superheroes.find(findSpiderMan)) 

//Opdracht B
const doubleArrayValues = [1, 2, 3]
const map = doubleArrayValues.map(x => x * 2);
console.log(map);


const doubleArrayValuesShortHand = function(x) {
    return x.map(n => n + n);
  };
  console.log(doubleArrayValuesShortHand([4, 1, 1, 1, 4]));

//Opdracht C
array = [1, 4, 3, 6, 9, 7, 11]
const gedoe = (element) => element >= 10;
console.log(array.some(gedoe));

const containsNumberBiggerThan10 = function(array) {
    return array.some(number => {
      return number > 10;
    });
};
console.log( "Je suis bigger than 10:", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

// Opdracht D
const landen = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
function isItalyInTheGreat7(arr, val) {
    return arr.some(arrVal => val === arrVal);
}
console.log(isItalyInTheGreat7(landen, 'Italy'));

const isItalyInTheGreat7 = (array) => array.includes("Italy");

//Opdracht E
tenfold = [1, 4, 3, 6, 9, 7, 11];
tenfold.forEach(element => {
        console.log(element * 10)
    });

const tenfoldMap = function(array) {
        return array.map(number => number * 10);
};
console.log("tenfold", tenfoldMap([1, 4, 3, 6, 9, 7, 11]));

//Opdracht F
const isBelow100 = (element) => element < 100;
const array = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
console.log(array.every(isBelow100));

function isBelow100(array) {
    return array.every(number => {
      return number < 100;
    });
}
console.log(
    "Onder de 100?:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

//Opdracht G
const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(array) {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};
console.log("Big sum, add all numbers in array:", bigSum([3, 4]));
console.log("Big sum, add all numbers in array:", bigSum(numbers));