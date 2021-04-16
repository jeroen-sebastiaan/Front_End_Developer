//Function Declaration
function calculateSquareFD(num3, num4){
    const sumFD =((num3 * num3)+(num4 * num4));
    const squareSumFD = (sumFD * sumFD);
    return squareSumFD;
};

const resultFD = calculateSquareFD(3,3);
console.log(resultFD);


//Function Expression
const calculateSquareFE = function(num1, num2){
    const sumFE =((num1 * num1)+(num2 * num2));
    const squareSumFE = (sumFE * sumFE);
    return squareSumFE;
};

const resultFE = calculateSquareFE(2,2);
console.log(resultFE);

// Function Arrow
const calculateSquareFA = (num5, num6) =>{
    const sumFA =((num5 * num5)+(num6 * num6));
    const squareSumFA = (sumFA * sumFA);
    return squareSumFA;
};

const resultFA = calculateSquareFA(4,4);
console.log(resultFA);