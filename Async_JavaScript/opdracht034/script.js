// How to use the rest-operator
const restFunction = (...numbers) => {
    return numbers.reduce((prev, current) =>{
        return prev + current
    });
};

// Shot version
const restFunctionShort = (...numbers) => {
    return numbers.reduce((prev, current) => prev + current);
}; 

console.log(restFunction(4, 5, 6));
console.log(restFunction(3, 3, 4, 10));
console.log(restFunctionShort(3, 3, 4, 10));

// How to use the spread-operator
const spreadFunction = (a, b) =>  a + b;
let arrayNum = [15, 25];
console.log(spreadFunction(...arrayNum));