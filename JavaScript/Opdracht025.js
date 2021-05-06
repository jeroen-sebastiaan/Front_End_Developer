//DEEL 1
const greaterThen = function(number){
    if (number > 100) {
        return "True";
    }
        return 'False'
};

const result = greaterThen(86);
console.log(result);

//DEEL 2
const enterClub = function(number, age){
    if (age >= 18 && number <= 50){
    return 'Come in!';
    }
    else if (age >= 18 && number >= 50){
    return 'Its too busy, come back later.';
    }
    else (age < 18)
    return 'This is a club for adults.'
};

const Brenda = enterClub(67, 18);
console.log(Brenda);

//DEEL 3
const calculateAverage = function(number1, number2, number3, number4, number5){
    const sum = (number1 + number2 + number3 + number4 + number5);
    return sum;
}; 

const total = calculateAverage(7,9,10,11,12)
console.log(Math.round(total /5));
