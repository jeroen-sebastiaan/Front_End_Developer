const age = 25;
const namen ='Bram';
const totalAmount = 23; 

// Deel 1
if (age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!");
}   else{
        console.log("Helaas. Je krijgt geen korting.");
    }

// Deel 2 
if (namen === 'Sara' || namen === 'Bram' ){
    console.log("Gratis bier voor jou Bram of Sara!");
}   else{
    console.log("Nice try. Verander eerst je naam.");
}

//Deel 3
if (totalAmount >= 25 && totalAmount < 50){
    console.log("Gratis vegabitterballen!");
}   else if (totalAmount >= 50 && totalAmount < 100){
    console.log("Gratis portie nachos!");
}   else if (totalAmount>= 100){
    console.log("Gratis champagne!");
}   else{
    console.log("Bestel meer. Dit is veel te weinig!");
}
