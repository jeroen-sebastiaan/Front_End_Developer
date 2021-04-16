//Iteration methods
var colorsArray = ["green", 'yellow', 'red', 'orange'];

//itereren over OBJECT
for (x of colorsArray) {
    console.log(x)
};

//itereren over een ARRAY (werkt niet over een object)
colorsArray.forEach((color) => console.log(color));