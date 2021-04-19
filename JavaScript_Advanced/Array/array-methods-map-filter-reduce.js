const superheroes = [{
"name": "Batman",
"publisher": "DC Comics",
"alter_ego": "Bruce Wayne",
"first_appearance": "Detective Comics #27",
"weight": "210"
},
{
"name": "Superman",
"publisher": "DC Comics",
"alter_ego": "Kal-El",
"first_appearance": "Action Comics #1",
"weight": "220"
},
{
"name": "Flash",
"publisher": "DC Comics",
"alter_ego": "Jay Garrick",
"first_appearance": "Flash Comics #1",
"weight": "195"
},
{
"name": "Green Lantern",
"publisher": "DC Comics",
"alter_ego": "Alan Scott",
"first_appearance": "All-American Comics #16",
"weight": "186"
},
{
"name": "Green Arrow",
"publisher": "DC Comics",
"alter_ego": "Oliver Queen",
"first_appearance": "All-American Comics #16",
"weight": "195"
},
{
"name": "Wonder Woman",
"publisher": "DC Comics",
"alter_ego": "Princess Diana",
"first_appearance": "The Incredible Hulk #180",
"weight": "165"
},
{
"name": "Blue Beetle",
"publisher": "DC Comics",
"alter_ego": "Dan Garret",
"first_appearance": "Mystery Men Comics #1",
"weight": "145"
},
{
"name": "Spider Man",
"publisher": "Marvel Comics",
"alter_ego": "Peter Parker",
"first_appearance": "Amazing Fantasy #15",
"weight": "167"
},
{
"name": "Captain America",
"publisher": "Marvel Comics",
"alter_ego": "Steve Rogers",
"first_appearance": "Captain America Comics #1",
"weight": "220"
},
{
"name": "Iron Man",
"publisher": "Marvel Comics",
"alter_ego": "Tony Stark",
"first_appearance": "Tales of Suspense #39",
"weight": "250"
},
{
"name": "Thor",
"publisher": "Marvel Comics",
"alter_ego": "Thor Odinson",
"first_appearance": "Journey into Myster #83",
"weight": "200"
},
{
"name": "Hulk",
"publisher": "Marvel Comics",
"alter_ego": "Bruce Banner",
"first_appearance": "The Incredible Hulk #1",
"weight": "1400"
},
{
"name": "Wolverine",
"publisher": "Marvel Comics",
"alter_ego": "James Howlett",
"first_appearance": "The Incredible Hulk #180",
"weight": "200"
},
{
"name": "Daredevil",
"publisher": "Marvel Comics",
"alter_ego": "Matthew Michael Murdock",
"first_appearance": "Daredevil #1",
"weight": "200"
},
{
"name": "Silver Surfer",
"publisher": "Marvel Comics",
"alter_ego": "Norrin Radd",
"first_appearance": "The Fantastic Four #48",
"weight": "unknown"
}]

// Opdracht 1 - namen van de superhelden
const namesOfSuperHeroes = superheroes.map((superhero) => {
    return superhero.name;
});
console.log(namesOfSuperHeroes);

// Opdracht 2 - alle lichte superhelden
const lichtgewichtSuperHeroes = superheroes.filter((superhero) => {
    return superhero.weight <= 190;
});
console.log(lichtgewichtSuperHeroes);

// Opdracht 3 - Namen van zware jongens
const naamZwareSuperHeroes = superheroes.filter((superhero) => {
    return superhero.weight == 200;
    }).map((superhero) =>{
        return superhero.name;
});
console.log(naamZwareSuperHeroes);

// Opdracht 4 - Comics first appearances
const comicsOfSuperHeroes = superheroes.map((superhero) => {
    return superhero.first_appearance;
});
console.log(comicsOfSuperHeroes);

// Opdracht 5 - DC comics And Marvel comics
const marvelSuperHeroes = superheroes.filter((superhero) => {
    return superhero.publisher == 'Marvel Comics';
    }).map((superhero) =>{
        return superhero.name;
});
console.log("Dit zijn de helden uit Marvel Comics: ",marvelSuperHeroes);

const dCSuperHeroes = superheroes.filter((superhero) => {
    return superhero.publisher == 'DC Comics';
    }).map((superhero) =>{
        return superhero.name;
});
console.log("Dit zijn de helden uit DC Comics: ", dCSuperHeroes);

// Opdracht 6 - gewicht bij elkaar opgeteld DC Comics helden
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const gewichtDCSuperHeroes = superheroes.filter((superhero) => {
    return superhero.publisher == 'DC Comics';
    }).map ((superhero) => {
        return Number(superhero.weight);
    });

console.log("Dit is het gewicht bij elkaar opgeteld van de helden uit DC Comics: ", gewichtDCSuperHeroes.reduce(reducer));

// Opdracht 7 - gewicht bij elkaar opgeteld Marvel Comics helden
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const gewichtMarvelSuperHeroes = superheroes.filter((superhero) => {
    return superhero.publisher == 'Marvel Comics';
    }).map ((superhero) => {
        if (superhero.weight == 'unknown'){
            return Number(0)
        }else{
        return Number(superhero.weight);
        }
    });

console.log("Dit is het gewicht bij elkaar opgeteld van de helden uit DC Comics: ", gewichtMarvelSuperHeroes.reduce(reducer));

// Opdracht 8 - BONUS De zware jongen


