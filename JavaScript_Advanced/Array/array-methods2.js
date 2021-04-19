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

//Opdracht C
array = [1, 4, 3, 6, 9, 7, 11]
const gedoe = (element) => element >= 10;
console.log(array.some(gedoe));

// Opdracht D
const landen = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
function isItalyInTheGreat7(arr, val) {
    return arr.some(arrVal => val === arrVal);
}
console.log(isItalyInTheGreat7(landen, 'Italy'));

//Opdracht E
tenfold = [1, 4, 3, 6, 9, 7, 11];
tenfold.forEach(element => {
        console.log(element * 10)
    });

//Opdracht F
const isBelow100 = (element) => element < 100;
const array = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
console.log(array.every(isBelow100));
