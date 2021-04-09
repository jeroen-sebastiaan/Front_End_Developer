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

// console.log(entranceMessage(19));
    
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

// console.log(totalPrice(200, 1.21));

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
