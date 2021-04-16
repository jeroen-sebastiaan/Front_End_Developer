// Paint a wall

// Function             parameter 
const paint = function(side, color){
    console.log("The " + side + "wall has been painted " + color + '.');
};

//      argument
paint('north', 'red');
paint('south-east', 'grey');

const person ={
    naam = 'Popeye',
    age = '4',
    //Method
    sayHi: function(naam, age) {
        console.log("Hi" + naam  + age);
    },
};

sayHi(person);

//A method is a function attached to an object (as above)