//DEEL 1
const checkAge = function(age){
    if (age >= 18){
    return "True";
    }
    return "False"
};

const entranceMessage = function(age) {
    console.log("What's the message?");
    const doorPolicy = checkAge(age);
    if (doorPolicy == "True"){
    return "Hello There"
    }
    return "Hey kiddo"
};

console.log(entranceMessage(19));

//SHORT version
const isAdultShort = age => age >= 18;

const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(greetShort(65)); // "Hello there"
console.log(greetShort(10)); // "Hey kiddo"
    
// DEEL 2
const calculateVAT = (baseprice, vat) =>{
    const calculation = (baseprice * vat);
    return calculation;
}

const totalPrice = (baseprice, vat) =>{
    console.log("Wat is the price with the VAT included?");
    const price = calculateVAT(baseprice, vat);
    return price;
};

console.log(totalPrice(200, 1.21));

// Short
const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

// DEEL 3
const calculateVAT = (amount, vatPercentage ) =>{
    const calculation = (amount / vatPercentage);
    return calculation;
}

const totalPrice = (amount, vatPercentage) =>{
    console.log("Wat is the price with the VAT included?");
    const price = calculateVAT(amount, vatPercentage);
    return price;
};

console.log(totalPrice(242, 1.21));