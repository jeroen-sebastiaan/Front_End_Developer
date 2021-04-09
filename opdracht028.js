// Even Odd Reporter
for (i = 1; i <= 20; i++){
    if (i % 2 === 0){
    console.log(i + ' is even.')
    return i;
    }
    else{
    console.log(i + ' is oneven.')
    return i;
    }  
}; 

// Tables
for (i = 1; i <11; i++){
    for (n =1; n < 11; n++){
        console.log(i * n);
    }
};

// Grades Assigner
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

for (i = 60; i <=100; i++){
    const score = (i);
    const message = assignGrade(score);
    console.log("Voor " + i + " punten krijg je een " + message + ".");
}
